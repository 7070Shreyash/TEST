import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Temp.css";
import UgImpDates from "../UG/UgImpDates";
import UgBullet from "../UG/UgBullet";

const Temp = ({ x, arr, dataArray, color }) => {
  const t = [];
  if (x !== null) {
    t.push(<UgImpDates x={x} arr={arr} />);
  } else {
    t.push(<></>);
  }
  return (
    <section className="main-box" style={{ backgroundColor: color }}>
      <div className="container-box">
        {t}
        <UgBullet dataArray={dataArray} />
      </div>
    </section>
  );
};

export default Temp;
