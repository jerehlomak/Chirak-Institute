import React, { Component } from "react";
import { Navbar } from "../components";
import { Main2 } from "../components";
import { GrLock } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { MdFace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  loginUser,
  forgotPassword,
  handleChange,
} from "../store/actions/user.action";
import VerifyOtp from "../components/VerifyOTP/VerifyOtp";
import Ring from "../assets/DoubleRing.gif";

class Login extends Component {
  state = {
    userCred: {
      email: "",
      password: "",
    },
    userEmail: {
      email: "",
    },
    isForgotPassword: false,
    sentEmail: false,
    loading: false,
    counter: 0,
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ userCred: { ...this.state.userCred, [name]: value } });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.userCred);
    this.setState({ loading: true });
    console.log(this.state.userCred);
    // this.setState({
    //   userCred: {
    //     email: "",
    //     password: "",
    //   },
    // });
    // if (this.props.authError) {
    //   this.setState({ loading: false });
    // }
    // if (!this.props.studentExists) {
    //   this.setState({ loading: true });
    // }
    // if (!this.props.studentExists && !this.props.authError) {
    //   this.setState({ loading: true });
    // } else {
    //   this.setState({ loading: false });
    // }
  };

  // HANDLE RADIO BUTTONS
  handleRadio = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(
      {
        userCred: {
          ...this.state.userCred,
          [name]: value,
        },
      },
      function () {
        console.log(this.state);
      }
    );
    console.log(this.state);
  };
  // FORGOT PASSWORD

  handleUserEmail = (e) => {
    const { value, name } = e.target;
    this.setState({ userEmail: { ...this.state.userEmail, [name]: value } });
  };
  submitForgotPassword = (e) => {
    e.preventDefault();

    this.props.forgotPassword(this.state.userEmail);
    this.setState({ userEmail: { email: "" } });
    if (this.props.forgotPasswordResp) {
      this.setState({ sentEmail: true });
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.forgotPasswordResp !== prevProps.forgotPasswordResp) {
      this.setState({ sentEmail: true });
    }
  }
  handleForgotPassword = () => {
    this.setState({ isForgotPassword: true });
  };

  render() {
    const { token, studentExists, authError, forgotError } = this.props;
    const {
      isForgotPassword,
      userEmail,
      userCred: { email, password, userType },
      sentEmail,
    } = this.state;

    setInterval(() => {
      if (authError) {
        this.setState({ loading: false });
      }
    }, 1000);

    if (token) return <Navigate to='/dashboard' />;
    return (
      <>
        <div className='blur'></div>
        <div id='login' className='login min-h-screen'>
          <Navbar />
          <Main2 />
        </div>
        <div className='w-full max-w-lg shadow-md'>
          <div className='login__form flex flex-col items-center justify-center p-4 md:p-0 px-14 py-7 rounded-full shadow-2xl space-y-4 md:space-y-12'>
            {/* FORGOT PASSWORD */}

            {isForgotPassword && !sentEmail && (
              <div className='form relative mb-0'>
                <form method='POST' onSubmit={this.submitForgotPassword}>
                  <h1 className='relative text-2xl text-center text-gray-800 font-bold py-2'>
                    Forgot Password
                  </h1>
                  {forgotError ? (
                    <div class='entry__note text-white py-2 px-2 rounded-md bg-red-500 !my-2 text-center text-sm font-semibold'>
                      {forgotError}
                    </div>
                  ) : (
                    <p className='text-white text-center pb-2'>
                      Enter your email address
                    </p>
                  )}

                  <input
                    name='email'
                    type='email'
                    required
                    placeholder='Email'
                    onChange={this.handleUserEmail}
                    value={userEmail.email}
                    className='w-full border-none font-2xl px-3 py-2 rounded-lg shadow-sm focus:outline-none bg-white'
                  />
                  <button type='submit' className='btn-red w-full h-11 mt-3'>
                    Submit
                  </button>
                </form>
              </div>
            )}

            {/* LOGIN FORM */}

            {!isForgotPassword && !sentEmail && (
              <form
                className='form relative mb-0 space-y-6'
                onSubmit={this.handleSubmit}
              >
                <h1 className='relative text-2xl text-center text-gray-800 font-bold mb-10'>
                  Login
                </h1>
                {/* {authError ? (
                  <div class='entry__note text-white py-2 px-2 rounded-md bg-red-500 !my-2 text-center text-sm font-semibold'>
                    {authError}
                  </div>
                ) : null} */}
                <div className='login__input mt-4 w-full flex items-center justify-justify-between border border-neutral-900 rounded-md px-2'>
                  <IoMdMail size={24} className='relative place-self-center' />
                  <input
                    name='email'
                    type='email'
                    required
                    placeholder='Email'
                    // onChange={(e) => {
                    //   this.props.handleChange(e.target.name, e.target.value);
                    // }}
                    onChange={this.handleChange}
                    value={email}
                    className='w-full border-none font-2xl px-3 py-2 rounded-lg shadow-sm focus:outline-none bg-transparent'
                  />
                </div>
                <div className='mt-4 flex items-center justify-justify-between border border-black rounded-md px-2'>
                  <GrLock size={24} className='relative place-self-center' />
                  <input
                    name='password'
                    type='password'
                    required
                    placeholder='Password'
                    onChange={this.handleChange}
                    value={password}
                    className='w-full border-none font-2xl px-3 py-2 rounded-lg shadow-sm focus:outline-none bg-transparent'
                  />
                </div>
                <div className='mt-4 border border-black rounded-md p-2'>
                  <div className='flex justify-start'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:!bg-red-600 checked:!border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                        type='radio'
                        name='userType'
                        onChange={this.handleRadio}
                        value='student'
                        id='student'
                      />
                      <label
                        className='form-check-label inline-block text-black'
                        for='inlineRadio10'
                      >
                        Student
                      </label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:!bg-red-600 checked:!border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                        type='radio'
                        name='userType'
                        onChange={this.handleRadio}
                        value='teacher'
                        id='teacher'
                      />
                      <label
                        className='form-check-label inline-block text-black'
                        for='inlineRadio20'
                      >
                        Teacher
                      </label>
                    </div>
                  </div>
                </div>
                <span className='flex text-center items-center justify-center place-self-center w-full p-2 px-5 py-2 shadow-lg rounded-lg  bg-gradient-to-r from-red-700 to-neutral-900 baseline'>
                  {this.state.loading ? (
                    <img src={Ring} alt='' className='w-8 h-8' />
                  ) : (
                    <>
                      <GrLock
                        size={20}
                        color='white'
                        className='w-6 h-6 place-self-start text-white'
                      />
                      <button
                        type='submit'
                        className='ml-2 text-base font-bold text-white'
                      >
                        Login
                      </button>
                    </>
                  )}
                </span>
                <span
                  className='flex justify-end underline cursor-pointer'
                  onClick={this.handleForgotPassword}
                >
                  forgot password
                </span>
                <p className='text-neutral-900 font-bold text-base place-self-center -mt-10'>
                  Don't have an account?{" "}
                  <Link to='/register'>
                    <span className='text-base text-white cursor-pointer'>
                      Sign up
                    </span>
                  </Link>
                </p>
              </form>
            )}

            {/* VERIFY OTP */}

            {sentEmail && (
              <div className='form relative mb-0'>
                <VerifyOtp />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentExists: state.userReducer.studentExists,
    forgotPasswordResp: state.userReducer.forgotPasswordResp,
    userCred: state.userReducer.userCred,
    authError: state.userReducer.authError,
    forgotError: state.userReducer.forgotError,
    forgotPasswordResp: state.userReducer.forgotPasswordResp,
    token: state.userReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (name, value) => dispatch(handleChange(name, value)),
    loginUser: (userObj) => dispatch(loginUser(userObj)),
    forgotPassword: (userEmail) => dispatch(forgotPassword(userEmail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
