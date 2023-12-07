import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./UgModeFirst.css";
import UgImpDates from './UgImpDates';

const UgModeFirst = ({ title1, title2, dataArray }) => {
    return (
        <>
            <section className="ug-mode-first">
                <div className="ug-mode-first-container">
                    <div className="ug-mode-first-title">
                        <h2 className="ug-mode-first-title-h2">
                            {title1}
                        </h2>
                    </div>
                    <UgImpDates x={title2} arr={dataArray} />
                </div>
            </section>
        </>
    )
}

export default UgModeFirst