import React from 'react';
import { Table } from 'react-bootstrap';
import "./UgImpDates.css";
import "bootstrap/dist/css/bootstrap.min.css";


const UgImpDates = ({ x, arr }) => {
  const hd = [];
  const card = [];

  arr.map((val, key) => {
    card.push(
      <tr>
        <td className="table-elemento">{val[0]}</td>
        <td className="table-elemento">{val[1]}</td>
      </tr>
    )
  });
  if (x === null) {
    hd.push(<></>)
  }
  else {
    hd.push(<h3 className="ug-imp-dates-h3">
      {x}
    </h3>)
  }
  card.shift();
  return (
    <section className="ug-imp-dates">
      <div className="ug-imp-dates-container">
        {hd}
        <Table striped bordered>
          <thead>
            <tr className="checkers">
              <th className="event-head">{arr[0][0]}</th>
              <th className="date-head">{arr[0][1]}</th>
            </tr>
          </thead>
          <tbody>
            {card}
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default UgImpDates;