import { Round } from "./SeatAllotment.js";
import { retrieveData } from "../Model/data.js";
import { PostAllotment } from "./PostAllotment.js";
import { pool } from "../Model/database.js";
import { brute_force } from "./brute_force.js";

let applicants = [];
let branches = [];
let round_no = 0;

const SignUp = async (req, res) => {
    console.log(req.body.data);
    const { email_id, phone_no, password } = req.body.data;
    await pool.query("INSERT INTO signup(email_id, phone_no, password) VALUES ($1, $2, $3);",
        [email_id, phone_no, password]
        )
        .then(() => console.log("Credentials stored"))
        .catch((err) => console.log(err));

    let results;
    await pool.query("SELECT id FROM signup WHERE email_id=($1);", [email_id])
        .then((data) => {
        results = data;
        console.log("ID retrived");
        })
        .catch((err) => console.log(err));

    const extended_id = "23LNM" + results.rows[0].id;
    res.json(extended_id);
}

const Login = async (req, res) => {
    const decider = {
      flag: false,
      id: null,
      data: null,
      pref_details: null,
    };
    const { id, pass } = req.body.data;
  
    if (id.slice(0, 5) === "23LNM") {
      const { rows } = await pool.query("SELECT password FROM signup WHERE id=($1);", [
          id.slice(5, id.length),
        ])
        .then((data) => {
          console.log("Password retrived");
          return data;
        })
        .catch((err) => console.log(err));
  
      if (rows.length != 0) {
        const { password } = rows[0];
        decider.id = id.slice(5, id.length);
        if (pass === password) {
          decider.flag = true;
          const results = await pool
            .query("SELECT status, on_hold FROM applicants WHERE id = ($1);", [
              id.slice(5, id.length),
            ])
            .then((data) => {
              console.log("Return application status");
              return data;
            })
            .catch((err) => console.log(err));
  
          decider.pref_details = await pool.query(
            "SELECT UNNEST(prefs) FROM applicants WHERE id = ($1);",
            [id.slice(5, id.length)]
          );
          decider.data = results.rows;
        }
      }
    }
    res.json(decider);
}

const StoreData = async (req, res) => {
    try {
      const {
        id,
        first_name,
        middle_name,
        last_name,
        father_name,
        address1,
        address2,
        zip,
      } = req.body.data.a;
      const {
        board_10,
        percentage_10,
        yop_10,
        rollno_10,
        board_12,
        percentage_12,
        yop_12,
        rollno_12,
        application_no,
        mains_rank,
      } = req.body.data.d;
      const prefs = req.body.data.prefs.dsp;
  
      await pool
        .query(
          `INSERT INTO personaldetails(id, first_name, middle_name, last_name, father_name, address1, address2, zip)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
          [
            id,
            first_name,
            middle_name,
            last_name,
            father_name,
            address1,
            address2,
            zip,
          ]
        )
        .then(() => console.log("Personal details have been added"));
  
      await pool
        .query(
          `INSERT INTO academicdetails
          (id, board_10, percentage_10, yop_10, rollno_10, board_12, percentage_12, yop_12, rollno_12, application_no, mains_rank)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,
          [
            id,
            board_10,
            percentage_10,
            yop_10,
            rollno_10,
            board_12,
            percentage_12,
            yop_12,
            rollno_12,
            application_no,
            mains_rank,
          ]
        )
        .then(() => console.log("Academic details have been added"));
  
      const { text, values } = brute_force(id, mains_rank, prefs, -1, false);
      await pool
        .query(text, values)
        .then(() => console.log("Preferences have been added"));
    } catch (error) {
      console.log(error);
    }
}

const EvaluateApplicantOptions = async (req, res) => {
    try {
      await retrieveData(applicants, branches);
      const { id, value } = req.body.data;
      let applicant = await applicants.find((a) => {
        return a.id === id;
      });
      try {
        PostAllotment(applicant, branches, round_no, value);
      } catch (error) {
        console.log(error);
      }
      if(value==3 || value==2){
        let branch_alloted
        if(!applicant.status){
          branch_alloted = branches.find((b) => {return b.id === applicant.prefs[0].dsp})
        }
        else{
          branch_alloted = branches.find((b) => {return b.status == applicant.status})
        }
        await pool.query('DELETE FROM students WHERE id = $1;',[applicant.id])
        await pool.query('INSERT INTO students(id, branch_status, last_round) VALUES ($1,$2,$3)',
        [applicant.id, branch_alloted.status, round_no])
      }

    } catch (error) {
      console.log(error);
    }
}

const AdministratorFunction = async (req, res) => {
    console.log("Order to simulate rounds has been received\n");
    try {
      await retrieveData(applicants, branches);
      branches.map(async (branch) => (branch.wl_no = 1));
      await Round(applicants, branches).then((result) => {
        res.json(result);
      });
      round_no ++;
    } catch (error) {
      console.log(error);
    }
}

const Tutorial = async (req, res) => {
    console.log(req.url);
    applicants = [];
    branches = [];
    //res.json({ message: "Hello from server!" });
    res.json("Hello");
    //res.json(applicants[0])
}

export {
    SignUp, Login, StoreData, EvaluateApplicantOptions, AdministratorFunction, Tutorial
}