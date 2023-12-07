import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Raghav/Navbar";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import Placements from "./Pages/Placements";
import TryNirnay from "./Pages/TryNirnay";
import TryRaghav from "./Pages/TryRaghav";
import TryPrateek from "./Pages/TryPrateek";
import FirstTimeLogin from "./Pages/Login - First Time/FirstTimeLogin";
import PersonalDetails from "./Pages/Login - First Time/PersonalDetails";
import AcademicDetails from "./Pages/Login - First Time/AcademicDetails";
import DocumentSubmission from "./Pages/Login - First Time/DocumentSubmission";
import ChoosePreferences from "./Pages/Login - First Time/ChoosePreferences";
import ApplicantHome from "./Pages/After Login/ApplicantHome";
import Successful from "./Pages/Login - First Time/Successful";
import Allotment from "./Pages/After Login/Allotment";
import UgAdmissions from "./Pages/UgAdmissions";
import UgRegularMode from "./Pages/UgRegularMode";
import FeePayment from "./Pages/FeePayment";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUpPage";
import AdminLogin from "./Pages/AdminLogin";
import AdminHome from "./Pages/AdminHome";
import MTech from "./Pages/MTech";
import Msc from "./Pages/Msc";
import Phd from "./Pages/Phd";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {/* ----------ALL NO-LOGIN PAGES ROUTES---------- */}

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/try_nirnay" element={<TryNirnay />} />
          <Route path="/try_raghav" element={<TryRaghav />} />
          <Route path="/try_prateek" element={<TryPrateek />} />
          <Route path="/ug" element={<UgAdmissions />} />
          <Route path="/ug_regular_mode" element={<UgRegularMode />} />
          <Route path="/mtech" element={<MTech />} />
          <Route path="/msc" element={<Msc />} />
          <Route path="/phd" element={<Phd />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* After-Login Pages (First Time Login) =>  */}
        <Route path="/applicant/">
          <Route path="first_login/" element={<FirstTimeLogin />}>
            <Route index element={<PersonalDetails />} />
            <Route path="2" element={<AcademicDetails />} />
            <Route path="3" element={<DocumentSubmission />} />
            <Route path="preferences" element={<ChoosePreferences />} />
            <Route path="success" element={<Successful />} />
          </Route>
          <Route path="fee_payment" element={<FeePayment />} />
          <Route path="home" element={<ApplicantHome />} />
          <Route path="allotment" element={<Allotment />} />
        </Route>

        <Route path="/admin/">
          <Route path="home" element={<AdminHome />} />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h1>ERROR!</h1>
              <h4>Wrong URL!</h4>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
