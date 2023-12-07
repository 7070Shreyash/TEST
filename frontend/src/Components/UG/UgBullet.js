import React from "react";
import "./UgBullet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UgBulletCard from "./UgBulletCard";

const UgBullet = (props) => {

    const card = [];
    console.log()
    if (props.dataArray == null) {
        card.push(<></>);
    }
    else if (props.dataArray[0].hasOwnProperty('y')) {
        props.dataArray.map((val, key) => {
            card.push(<UgBulletCard header={val.h} list={val.x} sublist={val.x1} table={val.y} l1={val.z} l2={val.x1} />)
        });
    }
    else if (props.dataArray[0].hasOwnProperty('x1')) {
        props.dataArray.map((val, key) => {
            card.push(<UgBulletCard header={val.h} list={val.x} sublist={val.x1} table={null} l1={null} l2={null} />)
        });
    }
    else {
        props.dataArray.map((val, key) => {
            card.push(<UgBulletCard header={val.h} list={val.x} sublist={null} table={null} l1={null} l2={null} />)
        });
    }



    return (
        <section className="ug-regular-repeating-feature">
            <div className="ug-regular-repeating-feature-container">
                {card}
            </div >
        </section >
    )
}

export default UgBullet;
