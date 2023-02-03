import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components";
import { Main2 } from "../components";
import { GrLock } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { MdFace } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import axios from "../api/axios";
import { useDispatch, connect, useSelector } from "react-redux";
import { signUpAction } from "../store/actions/AuthAction";
import { signUpUser } from "../store/actions/user.action";
import VerifyRegisterOtp from "../components/VerifyOTP/VerifyRegisterOtp";
import { AuthReducer } from "../store/reducers/AuthReducer";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "api/v1/web-auth/register";

const Register = (props) => {
  // const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
  });
  useEffect(() => {
    console.log(props.success);
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [verifyReg, setVerifyReg] = useState(false);
  const [loading, setLoading] = useState(false);

  // useRef for user input and error message
  const userRef = useRef();
  const errorRef = useRef();

  // email
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // password
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  // error and success message
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  console.log(success);

  // success data
  const [data, setData] = useState(null);

  // dispatch action
  const dispatch = useDispatch();

  // email validation
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);
  // password validation
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  // console.log(formData)
  const handleChange = (event) => {
    // const [name, value] = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const authVerify = useSelector((state) => state.AuthReducer.auth.success);
  console.log(authVerify);
  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);

    if (!v1 || !v2) {
      setErrorMsg("Invalid Entry");
      return;
    }
    dispatch(signUpAction(firstName, lastName, email, password, userType));
    // if (success === true) return <Navigate to='verify' />
    // setLoading(true);
    if (authVerify === true) {
      setSuccess(true);
    }
  };

  return (
    <>
      <div className='blur'></div>
      <div id='login' className='login h-screen'>
        <Navbar />
        <Main2 />
      </div>

      {/* <Navigate to='/verify' replace /> */}
      <div className='w-full max-w-lg shadow-md'>
        <div className='login__form flex flex-col items-center justify-center w-3/4 md:max-w-lg p-2 md:p-12 px-4 py-2 rounded-full shadow-2xl space-y-2 md:space-y-12'>
          <div className='form relative mb-0 space-y-4'>
            {success === true ? (
              <Navigate to='/login' replace />
            ) : (
              // <div>
              //   {props.successMessage &&
              //   <div className='text-emerald-700 font-semibold bg-emerald-300 border-emerald-700 p-1 text-center my-2'>
              //     {props.successMessage}
              //   </div>
              //   }

              //    <VerifyRegisterOtp />
              //   </div>
              <>
                <h1 className='relative text-2xl text-center text-gray-800 font-bold mb-10'>
                  Join Chirak
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className=''
                  action='#'
                  method='POST'
                >
                  {props.errorMessage && (
                    <div className='text-red-900 font-semibold bg-red-300 border-red-900 p-1 text-center my-2'>
                      {props.errorMessage}
                    </div>
                  )}

                  <div>
                    <div className='login__input mt-2 w-full flex items-center justify-justify-between border border-black rounded-md px-2'>
                      <MdFace
                        size={24}
                        className='relative place-self-center'
                      />
                      <input
                        id='firstName'
                        // value={formData.firstName}
                        // onChange={handleChange}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name='firstName'
                        type='text'
                        autoComplete='off'
                        class=''
                        required
                        placeholder='First Name'
                        className='w-full border-none font-2xl px-3 py-2 rounded-lg outline-none  bg-transparent'
                      />
                    </div>
                    <div className='mt-4 w-full flex items-center justify-justify-between border border-neutral-900 rounded-md px-2'>
                      <MdFace
                        size={24}
                        className='relative place-self-center'
                      />
                      <input
                        id='lastName'
                        name='lastName'
                        // value={formData.lastName}
                        // onChange={handleChange}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type='text'
                        autoComplete='off'
                        required
                        placeholder='Last Name'
                        className='w-full border-none font-2xl px-3 py-2 rounded-lg outline-none bg-transparent'
                      />
                    </div>
                    <div className='relative mt-3 w-full flex items-center justify-justify-between border border-neutral-900 rounded-md px-2'>
                      <IoMdMail
                        size={24}
                        className='relative place-self-center'
                      />
                      <input
                        id='email'
                        // value={formData.email}
                        // onChange={handleChange}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        name='email'
                        type='email'
                        autoComplete='off'
                        required
                        class=''
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby='emailnote'
                        placeholder='Email'
                        className='w-full border-none font-2xl px-3 py-2 rounded-lg outline-none bg-transparent'
                      />
                      <p
                        id='emailnote'
                        className={
                          emailFocus && formData.email && !validEmail
                            ? "text-white bg-black rounded-md absolute top-10 left-10 z-10 text-sm px-4 py-3"
                            : "hidden"
                        }
                      >
                        error message here
                      </p>
                    </div>
                    <div className='relative mt-3 w-full flex items-center justify-justify-between border border-neutral-900 rounded-md px-2'>
                      <GrLock
                        size={24}
                        className='relative place-self-center'
                      />
                      <input
                        id='password'
                        // value={formData.password}
                        // onChange={handleChange}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby='pwdnote'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        class=''
                        placeholder='Password'
                        className='w-full border-none font-2xl px-3 py-2 rounded-lg outline-none bg-transparent'
                      />
                      <p
                        id='pwdnote'
                        className={
                          passwordFocus && !validPassword
                            ? "text-white bg-black rounded-md absolute top-10 left-10 z-10 text-sm px-4 py-3"
                            : "hidden"
                        }
                      >
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character.
                        <br />
                        Allowed special characters:{" "}
                        <span aria-label='exclamation mark'>!</span>{" "}
                        <span aria-label='at symbol'>@</span>{" "}
                        <span aria-label='hashtag'>#</span>{" "}
                        <span aria-label='dollar sign'>$</span>{" "}
                        <span aria-label='percent'>%</span>
                      </p>
                    </div>
                  </div>
                  <p className='text-center text-gray-800 max-w-xs mt-4'>
                    By Signing up, you agree to our Terms of Use and Privacy
                    Policy.
                  </p>
                  <div className='flex justify-center space-x-8'>
                    <div className='flex items-center space-x-4'>
                      <input
                        type='radio'
                        id='student-check'
                        name='userType'
                        required
                        value='student'
                        checked={userType === "student"}
                        onChange={(e) => setUserType(e.target.value)}
                        className='h-4 w-4 rounded-full  accent-black'
                      />
                      <label
                        for='student-check'
                        className='text-lg font-semibold'
                      >
                        Student
                      </label>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <input
                        type='radio'
                        id='teacher-check'
                        name='userType'
                        value='teacher'
                        required
                        checked={userType === "teacher"}
                        onChange={(e) => setUserType(e.target.value)}
                        className='h-4 w-4 rounded-full accent-black'
                      />
                      <label
                        for='teacher-check'
                        className='text-lg font-semibold'
                      >
                        Teacher
                      </label>
                    </div>
                  </div>
                  <div className='flex flex-col space-y-4 mt-4'>
                    <button
                      disabled={!validEmail || !validPassword ? true : false}
                      href='#'
                      className='flex text-center items-center justify-center place-self-center w-3/4 mx-auto p-2 px-7 py-2 shadow-lg rounded-full  bg-gradient-to-r from-red-700 to-neutral-900 baseline'
                    >
                      <GrLock
                        size={20}
                        color='white'
                        className='w-6 h-6 place-self-center text-center'
                      />
                      <span className=' ml-2 text-base font-bold text-white'>
                        Sign Up
                      </span>
                    </button>
                    <p className='text-center text-neutral-900 font-bold text-base -mt-10'>
                      Already have an account?{" "}
                      <Link to='/login'>
                        <a
                          href='#'
                          className='text-base text-white cursor-pointer'
                        >
                          Login
                        </a>
                      </Link>
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    studentExists: state.userReducer.studentExists,
    forgotPasswordResp: state.userReducer.forgotPasswordResp,
    userCred: state.userReducer.userCred,
    authError: state.userReducer.authError,
    forgotError: state.userReducer.forgotError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (userDetails) => dispatch(signUpUser(userDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
