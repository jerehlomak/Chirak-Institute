import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Header, Main, SideBar } from "../components/Teachers/components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeachersPage = (props) => {
  const { token, success } = props;
  useEffect(() => {
    const notify = () =>
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    notify();
  }, [token]);

  if (!token) return <Navigate to='/login' />;

  return (
    <div className='background flex flex-row'>
      <SideBar />
      <div className='flex flex-col w-full'>
        <ToastContainer />
        <Header />
        <Main />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};
export default connect(mapStateToProps)(TeachersPage);
