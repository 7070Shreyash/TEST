import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./AllotmentStyle.css";

const Allotment = () => {
  //Paths
  const home = "/";
  const payFees = "/applicant/fee_payment";
  //Hooks
  const [alloted, setAlloted] = useState(false);
  const [isDisabled, setIsDisabled] = useState({
    freeze: false,
    hold: false,
    float: false,
    drop: false,
  });
  const [branch, setBranch] = useState("");
  const [waiting, setWaiting] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  //Variables
  const applicationId = location.state.id;
  const status = location.state.data[0].status;
  const pref_details = location.state.pref_details;
  const on_hold = location.state.data[0].on_hold;
  const branches = [
    "Computer Science Engineering (CSE)",
    "Computer and Communication Engineering (CCE)",
    "Electronics and Communication Engineering (ECE)",
    "Mechanical and Mechatronics Engineering (MME)",
    "Dual Degree Computer Science Engineering (DCS)",
    "Dual Degree Electrical and Communication Engineering (DEC)",
  ];
  const branchMap = {
    CSE: "Computer Science Engineering (CSE)",
    CCE: "Computer and Communication Engineering (CCE)",
    ECE: "Electronics and Communication Engineering (ECE)",
    MME: "Mechanical and Mechatronics Engineering (MME)",
    DCS: "Dual Degree Computer Science Engineering (DCS)",
    DEC: "Dual Degree Electrical and Communication Engineering (DEC)",
  };

  /*
    if(status = 0) {1st Pref is the alloted one!}
    if(status = -1) {No Branch Alloted}
    else{
      if(status = x) branches [x-1];
    }
      CSE CCE ECE MME DCS DEC
    */
  // console.log(status[0].status);

  const getwait = (pref) => {
    let str = pref.slice(5, pref.length - 1);
    let b = parseInt(str);
    return b;
  };

  const getString = (pref) => {
    return pref.slice(1, 4);
  };

  useEffect(() => {
    if (status == 0) {
      //Candidate got the First Pref!
      setAlloted(true);
      let branchCurr = getString(pref_details[0].unnest);
      setBranch(branchMap[branchCurr]);
      //Disable Hold and Float Buttons

      setIsDisabled({ ...isDisabled, hold: true, float: true });
      // console.log(isDisabled);
    } else if (status == -1) {
      //nothing
      //Create Waiting List ->
      pref_details.forEach((pref) => {
        const branch = getString(pref.unnest);
        const wait = getwait(pref.unnest);
        console.log(`${branch} -> ${wait}`);
        setWaiting((waiting) => ({ ...waiting, [branch]: wait }));
      });

      //Disable All Buttons Except Drop
      setIsDisabled({ ...isDisabled, freeze: true, hold: true, float: true });
    } else {
      console.log(pref_details);
      //Create Waiting List ->
      pref_details.every((pref) => {
        const branch = getString(pref.unnest);
        const wait = getwait(pref.unnest);
        if (wait == 0) {
          return false;
        } else {
          setWaiting((waiting) => ({ ...waiting, [branch]: wait }));
          return true;
        }
      });
      setAlloted(true);
      setBranch(branches[status - 1]);
    }

    if (on_hold == true) {
      setIsDisabled({ ...isDisabled, float: true });
    }
  }, []);

  const handleClick = (e) => {
    const val = e.target.value;
    // console.log(`location state:- ${location.state}`)
    fetch(`/roundsEval`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { id: applicationId, value: val } }),
    }).then((res) => {
      console.log(res);
    });

    if (val == 3) {
      alert(
        "You've chosen to freeze the current seat...redirecting to fee payment"
      );
      navigate(payFees);
    } else if (val == 0) {
      alert(
        "You have been dropped out of the college! Refund process will start soon"
      );
      navigate(home);
    } else if (val == 2) {
      alert(
        "You've chosen to hold the current seat...redirecting to fee payment"
      );
      navigate(payFees);
    }
  };

  return (
    // <div style={{ width: "100%", height: "100vh", justifyContent: "center", display: "flex", alignItems: "center" }}>
    <div>
       <br/><br/><br/>
    <h1 style = {{ fontWeight : "bold" ,justifyContent: "center", display: "flex", alignItems: "center" }}> Track of Your Application</h1>
    <br/><br/><br/><br/>
      <div className="allotment-container" style={{ border : "2px solid blue" , boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.5)',width: "100%", height: "500px", alignItems: "center" }}>
        <div className="allotment-title">
        <br/><br/>
          {alloted == true
            ? `Congratulations! You have been alloted the \n
              ${branch}`
            : `You have not been alloted any branch yet. `}

          {/* {status == 0 ? (
            <div>You have been alloted the first Preference!</div>
          ) : (
            <div>
              <br />
              {/* <h1>{waiting}</h1> */}
              {/* {console.log(waiting)} */}
              {/* <li>
                {Object.keys(waiting).map((waitList, key) => {
                  return (
                    <ul key={key}>
                      {"Waiting for the Branch ' " +
                        waitList +
                        " ' is -: " +
                        waiting[waitList]}
                    </ul>
                  );
                })}
              </li>
            </div>
          )} */} 
        </div>

        {/* <Button
          variant="primary"
          size="lg"
          value={3}
          disabled={isDisabled.freeze}
          onClick={handleClick}
        >
          Freeze
        </Button>
        <Button
          variant="primary"
          size="lg"
          value={2}
          disabled={isDisabled.hold}
          onClick={handleClick}
        >
          Hold
        </Button>
        <Button
          variant="primary"
          size="lg"
          value={1}
          disabled={isDisabled.float}
          onClick={handleClick}
        >
          Float
        </Button> */}
        <h1 style = {{ fontWeight : "bold" ,justifyContent: "center", display: "flex", alignItems: "center" }}>You can see your progress in the waiting list .</h1>
        <h1 style = {{ fontWeight : "bold" ,justifyContent: "center", display: "flex", alignItems: "center" }}>kindly check the site regularly .</h1>
        <br/><br/><br/>
         <div style = {{ fontWeight : "bold" ,justifyContent: "center", display: "flex", alignItems: "center" }}>
        <Button
          variant="primary"
          size="lg"
          value={0}
          disabled={isDisabled.drop}
          onClick={handleClick}
        >
         Cancel Admission Process
        </Button>
      
      <Button
        className="m-3"
        size="lg"
        variant="primary"
        onClick={() => {
          navigate(home);
        }}
      >
        Log-out
      </Button>
      </div>
      
      <div style = {{ fontWeight : "bold" , marginTop : "40px" ,justifyContent: "center", display: "flex", alignItems: "center" }}>
      <h1 style = {{ fontWeight : "bold" , justifyContent: "center", display: "flex", alignItems: "center" }}>Waiting list -</h1>
      <t/><t/><t/><t/>
      <Button 
      variant="primary" 
      size="lg"
       href="https://drive.google.com/file/d/1Zei17HVd1FsdUIsG3fggRhyVx4TCV-2l/view?usp=drive_link"
       >  
        Waiting List
   {/* < TbFileDownload /> */}
  
      </Button>
      </div>
    </div>
    </div>
    
  );
};

export default Allotment;
