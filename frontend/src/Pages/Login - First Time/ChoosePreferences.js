import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginStyles.css";
import { Preference } from "../../Classes/Preference";

const ChoosePreferences = () => {
  const [selectedPref, setSelectedPref] = useState([]);
  // const [isError, setIsError] = useState(false);
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  let [chosenPref, setChosenPref] = useState([]);
  const navigate = useNavigate();

  const error = "All the filled Preferences must be distinct!";
  const nextPage = "/applicant/first_login/success";
  let dspArr = [];
  let flag = false;

  const prefs = new Preference();

  // const checkError = (arr) => {
  //   let prefSet = new Set();
  //   arr.forEach((val) => {
  //     prefSet.add(val);
  //   });
  //   if (prefSet.size < arr.length) {
  //     setIsError(true);
  //   }
  // };

  const handleChange = (e) => {
    // checkError([...selectedPref, e.target.value]);
    // if (!isError) {
      setSelectedPref((arr) => [...arr, e.target.value]);
      setChosenPref([...chosenPref, e.target.value]);
    // } else {
      // setIsError(false);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button Clicked!");
    // if (!isError) {
      chosenPref.forEach((val) => {
        // console.log("Current Val -> " + val);
        dspArr.push({ dsp: val, waiting: 10000 });
      });

      prefs.dsp = dspArr;
      console.log(dspArr);
      // console.log(p);
      setFormData({ ...formData, prefs });
      setProgress(progress + 20);
      navigate(nextPage);
    // }
  };

  return (
    <div>
      <Form method="post" className="details-form" onSubmit={handleSubmit}>
        <h1 style = {{ marginTop : "50px"}} >Fill Your Preferences</h1>
        <br /><br/>
        <Row className="mb-3">
          {/* <div className="error">{isError ? error : ""}</div> */}
          <Form.Group className="mb-5">
            <Form.Label>Preference - 1</Form.Label>
            <Form.Select
              required
              size="lg"
              defaultValue="Choose..."
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Choose...</option>
              <option key={1} value={"CSE"}>
                Computer Science Engineering (CSE){" "}
              </option>
              <option key={2} value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option key={3} value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option key={4} value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option key={5} value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option key={6} value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 2</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Choose...</option>
              {selectedPref.length >= 1 && (
                <>
                  <option key={1} value={"CSE"}>
                    Computer Science Engineering (CSE){" "}
                  </option>
                  <option key={2} value={"CCE"}>
                    Computer and Communication Engineering (CCE){" "}
                  </option>
                  <option key={3} value={"ECE"}>
                    Electrical and Communication Engineering (ECE){" "}
                  </option>
                  <option key={4} value={"MME"}>
                    Mechanical and Mechatronics Engineering (MME){" "}
                  </option>
                  <option key={5} value={"DCS"}>
                    Dual Degree Computer Science Engineering (DCS){" "}
                  </option>
                  <option key={6} value={"DEC"}>
                    Dual Degree Electrical and Communication Engineering (DEC)
                  </option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 3</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              {selectedPref.length >= 2 && (
                <>
                  <option key={1} value={"CSE"}>
                    Computer Science Engineering (CSE){" "}
                  </option>
                  <option key={2} value={"CCE"}>
                    Computer and Communication Engineering (CCE){" "}
                  </option>
                  <option key={3} value={"ECE"}>
                    Electrical and Communication Engineering (ECE){" "}
                  </option>
                  <option key={4} value={"MME"}>
                    Mechanical and Mechatronics Engineering (MME){" "}
                  </option>
                  <option key={5} value={"DCS"}>
                    Dual Degree Computer Science Engineering (DCS){" "}
                  </option>
                  <option key={6} value={"DEC"}>
                    Dual Degree Electrical and Communication Engineering (DEC)
                  </option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 4</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              {selectedPref.length >= 3 && (
                <>
                  <option key={1} value={"CSE"}>
                    Computer Science Engineering (CSE){" "}
                  </option>
                  <option key={2} value={"CCE"}>
                    Computer and Communication Engineering (CCE){" "}
                  </option>
                  <option key={3} value={"ECE"}>
                    Electrical and Communication Engineering (ECE){" "}
                  </option>
                  <option key={4} value={"MME"}>
                    Mechanical and Mechatronics Engineering (MME){" "}
                  </option>
                  <option key={5} value={"DCS"}>
                    Dual Degree Computer Science Engineering (DCS){" "}
                  </option>
                  <option key={6} value={"DEC"}>
                    Dual Degree Electrical and Communication Engineering (DEC)
                  </option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 5</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              {selectedPref.length >= 4 && (
                <>
                  <option key={1} value={"CSE"}>
                    Computer Science Engineering (CSE){" "}
                  </option>
                  <option key={2} value={"CCE"}>
                    Computer and Communication Engineering (CCE){" "}
                  </option>
                  <option key={3} value={"ECE"}>
                    Electrical and Communication Engineering (ECE){" "}
                  </option>
                  <option key={4} value={"MME"}>
                    Mechanical and Mechatronics Engineering (MME){" "}
                  </option>
                  <option key={5} value={"DCS"}>
                    Dual Degree Computer Science Engineering (DCS){" "}
                  </option>
                  <option key={6} value={"DEC"}>
                    Dual Degree Electrical and Communication Engineering (DEC)
                  </option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 6</Form.Label>
            <Form.Select
              size="lg"
              defaultValue="Choose..."
              onChange={handleChange}
            >
              <option value={""}>Choose...</option>
              {selectedPref.length >= 5 && (
                <>
                  <option key={1} value={"CSE"}>
                    Computer Science Engineering (CSE){" "}
                  </option>
                  <option key={2} value={"CCE"}>
                    Computer and Communication Engineering (CCE){" "}
                  </option>
                  <option key={3} value={"ECE"}>
                    Electrical and Communication Engineering (ECE){" "}
                  </option>
                  <option key={4} value={"MME"}>
                    Mechanical and Mechatronics Engineering (MME){" "}
                  </option>
                  <option key={5} value={"DCS"}>
                    Dual Degree Computer Science Engineering (DCS){" "}
                  </option>
                  <option key={6} value={"DEC"}>
                    Dual Degree Electrical and Communication Engineering (DEC)
                  </option>
                </>
              )}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChoosePreferences;
