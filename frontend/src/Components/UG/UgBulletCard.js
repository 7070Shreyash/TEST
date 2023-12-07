import React from 'react';
import UgImpDates from './UgImpDates';

const UgBulletCard = ({ header, list, sublist, table, l1, l2 }) => {
    const bult = [];
    const arr = [];
    const arr2 = [];

    if (table !== null) {
        list.map((item, key) => {
            bult.push(
                < li className="ug-regular-repeating-list-elements" >
                    {item}
                </li >
            )
        });
        bult.push(
            <UgImpDates x={null} arr={table} />
        )
        l1.map((item, key) => {
            bult.push(
                < li className="ug-regular-repeating-list-elements" >
                    {item}
                </li >
            )
        });
        l2.map((item, key) => {
            arr2.push(
                < li className="ug-regular-repeating-list-elements" >
                    {item}
                </li >
            )
        });
        arr.push(<ul className="ug-regular-repeating-ul">{arr2}</ul>);


    }
    else if (sublist !== null) {
        list.map((item, key) => {
            bult.push(
                < li className="ug-regular-repeating-list-elements" >
                    {item}
                </li >
            )
        });
        sublist.map((item, key) => {
            arr2.push(
                < li className="ug-regular-repeating-list-elements" >
                    {item}
                </li >
            )
        });
        arr.push(<ul className="ug-regular-repeating-ul">{arr2}</ul>);
    }
    else {
        list.map((item, key) => {
            bult.push(
                < li className="ug-regular-repeating-list-elements" >
                    {item}
                </li >
            )
        });
    }

    return (
        <div className="col-lg-12 col-md-12">
            <h3 className="ug-regular-repeating-h3">
                {header}
            </h3>
            <ul className="ug-regular-repeating-ul">
                {bult}
                {arr}
            </ul>
        </div>
    )
}

export default UgBulletCard;
