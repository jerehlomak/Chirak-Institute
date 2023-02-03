import React, { useState } from "react";

import Login from "./pages/Login";
import Index from "./pages/Index";
import Accreditation from "./pages/Accreditation/Accreditation";
import GetAccreditedPage1 from "./pages/Accreditation/GetAccreditedPage1";
import GetAccreditedPage2 from "./pages/Accreditation/GetAccreditedPage2";
import Register from "./pages/Register";
import TeachersPage from "./pages/TeachersPage";
import ManageStudentPage from "./pages/TeachersPortal/ManageStudentPage";
import NewCoursePage from "./pages/TeachersPortal/NewCoursePage";
import LessonPlanPage from "./pages/TeachersPortal/LessonPlanPage";
import ManageCourse from "./pages/TeachersPortal/ManageCourse";
import LessonPlanDetailsPage from "./pages/TeachersPortal/LessonPlanDetailsPage";
import DeleteLessonPlanPage from "./pages/TeachersPortal/DeleteLessonPlanPage";
import NewLessonPlanPage from "./pages/TeachersPortal/NewLessonPlanPage";
import VideoCallPage from "./pages/TeachersPortal/StartCall/VideoCallPage";
import AssessmentPage from "./pages/TeachersPortal/AssessmentPage";
import WithdrawalPage from "./pages/TeachersPortal/WithdrawalPage";

import VerifyRegisterOtp from "./components/VerifyOTP/VerifyRegisterOtp";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PreferredLanguage from "./pages/PreferredLanguage";

import Referees from "./components/Forms/Referees";
import { QualificationForm } from "./components";
import { MacBookPro } from "./components/Teachers/components";
import MessagePage from "./pages/TeachersPortal/MessagePage";
import "./App.css";

import { useSelector } from "react-redux";
import { AuthReducer } from "./store/reducers/AuthReducer";
import { useEffect } from "react";

function App() {
  const [auth, setAuth] = useState(false);
  const varToken = localStorage.getItem("token");
  const authUser = useSelector((state) => state.AuthReducer.auth.success);

  useEffect(() => {
    setAuth(authUser);
  }, [auth]);
  console.log(auth);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/verify' element={<VerifyRegisterOtp />} />
          <Route path='/dashboard' element={<TeachersPage />} />
          <Route exact path='/mac-screen' element={<MacBookPro />} />
          <Route exact path='/manage-student' element={<ManageStudentPage />} />
          <Route exact path='/all-courses' element={<ManageCourse />} />
          <Route exact path='/qualify' element={<QualificationForm />} />
          <Route exact path='/mac-screen' element={<MacBookPro />} />
          <Route exact path='/refreeform' element={<Referees />} />
          <Route exact path='/getaccredit' element={<GetAccreditedPage1 />} />
          <Route exact path='/getaccredit1' element={<GetAccreditedPage2 />} />
          <Route exact path='/getaccredit2' element={<Accreditation />} />

          <Route exact path='/lesson-plan/*' element={<LessonPlanPage />} />
          <Route
            exact
            path='/preferred-language'
            element={<PreferredLanguage />}
          />
          <Route exact path='/new-course' element={<NewCoursePage />} />
          <Route
            exact
            path='/delete-lesson-plan'
            element={<DeleteLessonPlanPage />}
          />
          <Route
            exact
            path='/new-lesson-plan'
            element={<NewLessonPlanPage />}
          />
          <Route
            exact
            path='/lesson-plan-details'
            element={<LessonPlanDetailsPage />}
          />

          <Route exact path='/start-class/video' element={<VideoCallPage />} />
          <Route exact path='/withdrawal' element={<WithdrawalPage />} />
          <Route exact path='/assessment' element={<AssessmentPage />} />
          <Route exact path='/message' element={<MessagePage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
