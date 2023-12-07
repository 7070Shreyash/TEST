import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AdminHome = () => {
  
  const [showResult, setShowResult] = useState([]);
  const [getResults, setGetResults] = useState(false);

  const fetchData = async () => {
    await fetch(`/administrator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowResult([...showResult, data]);
      });
  };
  const handleRounds = async () => {
    console.log("Handle Rounds Function!");
    setGetResults(false);
    setShowResult([]);
    await fetchData();
  };

  const handleResults = () => {
    console.log("Handle Results Function!");
    // alert(showResult);
    setGetResults(true);
    console.log(showResult);
    // setShowResult([...showResult, results]);
  };

  return (
    <div>
      <h1 className="m-3">Welcome to the Admin Home Page</h1>
      <h3 className="m-3">Click the Button to Simulate Rounds!</h3>
      <Button className="m-3" size="lg" variant="danger" onClick={handleRounds}>
        Simulate Rounds
      </Button>
      <Button className="m-3" size="lg" variant="danger" onClick={handleResults}>
        Get Results
      </Button>
      {
        getResults === true ? 
        <div>Results are - <br /> 
        <li>
          {showResult[showResult.length - 1].map((result, key) => {
            return (<ul key={key}>{result}</ul>)
          })}
        </li>
        </div>
        : "Click on Button to show Results"
      }
      
    </div>
  );
};

export default AdminHome;
