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
    <div>
      <h1>Seat Allotment Process</h1>

      <div className="allotment-container">
        <div className="allotment-title">
          {alloted == true
            ? `Congratulations! You have been alloted the \n
              ${branch}`
            : `You have not been alloted any branch yet`}

          {status == 0 ? (
            <div>You have been alloted the first Preference!</div>
          ) : (
            <div>
              <br />
              {/* <h1>{waiting}</h1> */}
              {/* {console.log(waiting)} */}
              <li>
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
          )}
        </div>

        <Button
          variant="danger"
          size="lg"
          value={3}
          disabled={isDisabled.freeze}
          onClick={handleClick}
        >
          Freeze
        </Button>
        <Button
          variant="danger"
          size="lg"
          value={2}
          disabled={isDisabled.hold}
          onClick={handleClick}
        >
          Hold
        </Button>
        <Button
          variant="danger"
          size="lg"
          value={1}
          disabled={isDisabled.float}
          onClick={handleClick}
        >
          Float
        </Button>
        <Button
          variant="danger"
          size="lg"
          value={0}
          disabled={isDisabled.drop}
          onClick={handleClick}
        >
          Drop
        </Button>
      </div>
      <Button
        className="m-3"
        size="lg"
        variant="danger"
        onClick={() => {
          navigate(home);
        }}
      >
        Log-out
      </Button>
    </div>
  );
};

export default Allotment;
