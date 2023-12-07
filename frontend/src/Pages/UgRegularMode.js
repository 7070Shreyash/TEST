import React from "react";
import UgModes from "../Components/UG/UgModes";
import UgModeFirst from "../Components/UG/UgModeFirst";
import RegularModeImpDates from "../Components/Prateek/Tables/Ug-Tables/UgRegularModeTables/RegularModeImpDates";
import RegularModeProgrammesOffered from "../Components/Prateek/Tables/Ug-Tables/UgRegularModeTables/RegularModeProgrammesOffered";
import TempData from "../Components/Nirnay/TempData";
import Temp from "../Components/Nirnay/Temp";
import { ins_branch, counc_process, refund_policy } from "../Components/Prateek/UgModesgreywhite/UgWhiteBulletedRegularMode";
import { note_ele, merit_list, fee, seat } from "../Components/Prateek/UgModesgreywhite/UgGreyBulletedRegularMode";
import GoToTop from "../Components/Nirnay/GoToTop";

const UgRegularMode = () => {
  return (
    <div>
      <GoToTop />
      <UgModes />
      <UgModeFirst title1={"REGULAR MODE"} title2={"IMPORTANT DATES"} dataArray={RegularModeImpDates} />
      <Temp x={"UG Programmes Offered and Available Seats"} arr={RegularModeProgrammesOffered} dataArray={note_ele} color={"#f2f2f2"} />
      <Temp x={null} arr={null} dataArray={ins_branch} color={"white"} />
      <Temp x={null} arr={null} dataArray={merit_list} color={"#f2f2f2"} />
      <Temp x={null} arr={null} dataArray={counc_process} color={"white"} />
      <Temp x={null} arr={null} dataArray={seat} color={"#f2f2f2"} />
    </div>
  );
};

export default UgRegularMode;
