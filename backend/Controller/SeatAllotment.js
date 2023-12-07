import { pool } from "../Model/database.js";
import { brute_force } from "./brute_force.js";

const try_alloting = (applicant, branches, current_status, flag) => {
  let branch = branches.find((b) => {
    return b.id === applicant.prefs[flag].dsp;
  });
  if (branch.seats) {
    branch.seats--;
    if (!flag) {
      for (let i = 0; i < applicant.prefs.length; ++i) {
        applicant.prefs[i].waiting = 0;
      }
      return 0;
    } else {
      let temp = applicant.prefs.find((p) => {
        return p.dsp == branch.id;
      });
      temp.waiting = 0;
      return branch.status;
    }
  } else {
    let temp = applicant.prefs.find((p) => {
      return p.dsp == branch.id;
    });
    temp.waiting = branch.wl_no;
    branch.wl_no++;
    return current_status;
  }
};

const Allot_Seat = (applicant, branches) => {
  if (applicant.status) {
    let current_status = applicant.status;
    for (let i = 0; i < applicant.prefs.length; ++i) {
      if (applicant.status == current_status) {
        applicant.status = try_alloting(applicant, branches, current_status, i);
        if (applicant.status != current_status) {
          break;
        }
      }
    }
  }
};

export const Round = async (applicants, branches) => {
  //Need to sort applicants by percentile before calling this function
  await applicants.map((applicant) =>
    Allot_Seat(applicant, branches)
  );

  await branches.forEach(async (branch)=>{
    await pool.query(`UPDATE branches SET seats = ($1), wl_no = ($2) WHERE id = ($3)`, [
      branch.seats,
      branch.wl_no,
      branch.id
    ]);
  })

  const result = await applicants.map(async (applicant) => {
    let alloted_branch_id;
    if (!applicant.status) {
      if (!applicant.prefs.length) {
        alloted_branch_id = "dropped-out-of-college";
      } else {
        alloted_branch_id = applicant.prefs[0].dsp;
      }
    } else {
      let alloted_branch = branches.find((b) => {
        return b.status === applicant.status;
      });
      alloted_branch_id =
        alloted_branch != null ? alloted_branch.id : "nothing";
    }

    await pool.query("DELETE FROM applicants WHERE id = ($1);", [applicant.id]);
    const {text, values} = brute_force(applicant.id, applicant.percentile, applicant.prefs, applicant.status, applicant.on_hold)
    await pool.query(text, values).then(()=>{
      console.log(`${applicant.id} has been updated\n`)
    })

    console.log(`${applicant.id} has been alloted ${alloted_branch_id}\n`);
    return `23LNM${applicant.id} has been alloted ${alloted_branch_id}`;
  });
  return Promise.all(result);
};
