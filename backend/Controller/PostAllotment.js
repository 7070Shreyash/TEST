import {pool} from '../Model/database.js'
import { brute_force } from './brute_force.js'

const Drop = (applicant, branches) => {
    if(applicant.status != -1){
        let branch_alloted
        if(!applicant.status){
            branch_alloted = branches.find((b) => {return b.id == applicant.prefs[0].dsp})
        }
        else{
            branch_alloted = branches.find((b) => {return b.status == applicant.status})
        }
        console.log(branch_alloted)
        branch_alloted.seats++;
    }
    applicant.prefs = []
    applicant.status = 0
    console.log(`${applicant.id} has dropped from the process\n`)
}

const Float = (applicant, branches) => {
    let branch_alloted = branches.find((b) => {return b.status == applicant.status})
    branch_alloted.seats++;
    applicant.status = -1;
    let updated_prefs = []
    let flag = true
    applicant.prefs.map(preference => {
        if(preference.dsp == branch_alloted.id){
            flag = false
        }
        if(flag){
            updated_prefs.push(preference)
        }
    });
    applicant.prefs = updated_prefs
    console.log(`${applicant.id} has floated away his seat\n`)
}

const Hold = (applicant, branches) => {
    let branch_alloted = branches.find((b) => {return b.status == applicant.status})
    let updated_prefs = []
    let flag = true
    applicant.prefs.map(preference => {
        if(flag){
            updated_prefs.push(preference)
        }
        if(preference.dsp == branch_alloted.id){
            flag = false
        }
    });
    applicant.prefs = updated_prefs
    applicant.on_hold = true
    console.log(`${applicant.id} is holding his seat\n`)
}

let frozen_applicants = []
const Freeze = async (applicant, branches,round_no) => {
    let branch_alloted
    if(!applicant.status){
        branch_alloted = branches.find((b) => {return b.id === applicant.prefs[0].dsp})
    }
    else{
        branch_alloted = branches.find((b) => {return b.status == applicant.status})
    }
    let frozen = applicant.prefs.find((p) => {return p.dsp == branch_alloted.id})

    frozen_applicants.push([applicant.id,branch_alloted.status, round_no])
    applicant.prefs = [frozen]
    applicant.status = 0
    console.log(`${applicant.id} has frozen his seat\n`)
}

const DecideStatus = (applicant, branches, round_no, choice) => {
    
    if(applicant.status == -1){
        //nothing
        if(choice==0){Drop(applicant,branches);}
        else{console.log(`${applicant.id} continues to stay in further rounds\n`)}
    }
    else if(!applicant.status){
        //1st pref case
        if(choice==0){Drop(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches, round_no);}
        else{Drop(applicant,branches)} //kicked out of the process 
    }
    else{
        //nth pref case
        if(choice==0){Drop(applicant,branches)}
        else if(choice==1 && !applicant.on_hold){Float(applicant,branches);}
        else if(choice==2){Hold(applicant,branches);}
        else if(choice==3){Freeze(applicant, branches, round_no)}
        else{
            if(!applicant.on_hold){Drop(applicant,branches)}
            else{console.log(`${applicant.id} continues to stay in further rounds\n`)}
        }
    }
    return applicant
}

export const PostAllotment = async(applicant, branches, round_no, choice) => {
    await DecideStatus(applicant, branches, round_no, choice)

    await branches.forEach(async (branch)=>{
        await pool.query(`UPDATE branches SET seats = ($1), wl_no = ($2) WHERE id = ($3)`, [
          branch.seats,
          branch.wl_no,
          branch.id
        ]);
    })

    await pool.query("DELETE FROM applicants WHERE id = ($1);", [applicant.id]);
    const {text, values} = brute_force(applicant.id, applicant.percentile, applicant.prefs, applicant.status, applicant.on_hold)
    await pool.query(text, values)
}