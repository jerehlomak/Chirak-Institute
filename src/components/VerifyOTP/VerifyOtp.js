import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OTPInput, { ResendOTP } from "otp-input-react";
import {
  changePassword,
  checkOtp,
  resetOtp,
} from "../../store/actions/user.action";
import PasswordChanged from "./PasswordChanged";
import { Link, useNavigate } from "react-router-dom";

const VerifyOtp = (props) => {
  const { checkOtp } = props;
  const [OTP, setOTP] = useState("");
  const [correctOtp, setCorrectOtp] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    const {
      forgotPasswordResp: { message },
    } = props;
    setNewMessage(message);
  }, []);

  useEffect(() => {
    if (OTP.length === 6) {
      checkOtp({ otp: OTP });
    }
    console.log(OTP);
  }, [OTP]);

  useEffect(() => {
    if (props.checkedOtp) {
      setCorrectOtp(true);
    }
  }, [props.checkedOtp]);

  const navigate = useNavigate();
  const submitNewPassword = (e, sotp, newPassword) => {
    e.preventDefault();

    props.changePassword(sotp, { password: newPassword });
    setNewPassword({ password: "" });
  };
  useEffect(() => {
    if (props.newPasswordResp) {
      setPasswordChanged(true);
    }
  }, [props.newPasswordResp]);
  return (
    <>
      {!correctOtp && !passwordChanged && (
        <div>
          <h1 className='relative text-lg text-center text-gray-800 font-bold py-2'>
            {newMessage}
          </h1>
          {props.checkedOtpError ? (
            <div class='entry__note text-white py-2 px-2 rounded-md bg-red-500 !my-2 text-center text-sm font-semibold'>
              <p>{props.checkedOtpError}</p>
            </div>
          ) : (
            <p className='text-white text-center pb-2'>Enter your OTP below</p>
          )}

          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType='number'
            disabled={false}
            secure={false}
          />
        </div>
      )}

      {correctOtp && !passwordChanged && (
        <form
          method='POST'
          onSubmit={(e) => submitNewPassword(e, OTP, newPassword)}
        >
          {props.changePasswordError && (
            <div class='entry__note text-white py-2 px-2 rounded-md bg-red-500 !my-2 text-center text-sm font-semibold'>
              <p>{props.changePasswordError}</p>
            </div>
          )}
          <h1 className='relative text-lg text-center text-gray-800 font-bold py-2'>
            Enter New Password
          </h1>
          <input
            name='password'
            type='password'
            required
            placeholder='Password'
            onChange={(e) => {
              console.log(e.target.value);
              setNewPassword(e.target.value);
            }}
            value={newPassword.password}
            className='w-full border-none font-2xl px-3 py-2 rounded-lg shadow-sm focus:outline-none bg-white'
          />
          <button type='submit' className='btn-red w-full h-11 mt-3'>
            Reset
          </button>
        </form>
      )}
      {passwordChanged && (
        <>
          <p className=' text-black font-semibold'>{props.newPasswordResp}</p>
          <Link to='/dashboard'>
            <button className='btn-red w-full h-11 mt-3'>Continue</button>
          </Link>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    forgotPasswordResp: state.userReducer.forgotPasswordResp,
    checkedOtp: state.userReducer.checkedOtp,
    checkedOtpError: state.userReducer.checkedOtpError,
    newPasswordResp: state.userReducer.newPasswordResp,
    changePasswordError: state.userReducer.changePasswordError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (otp, newPassword) =>
      dispatch(changePassword(otp, newPassword)),
    checkOtp: (userOtp) => dispatch(checkOtp(userOtp)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp);
