import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OTPInput, { ResendOTP } from "otp-input-react";
import {
  verifyOtp,
} from "../../store/actions/user.action";
import { Link, useNavigate, Navigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Main2 from "../Main/Main2";

const VerifyRegisterOtp = (props) => {
    const { verifyOtp } = props;
    const [OTP, setOTP] = useState("");
    const [correctOtp, setCorrectOtp] = useState(false);
    const [verifyRegOtp, setVerifyRegOtp] = useState(false)
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (OTP.length === 6) {
          verifyOtp({ otp: OTP });
          setVerifyRegOtp(true)
        }
        console.log(OTP);
      }, [OTP]);
    
      useEffect(() => {
        if (props.checkedOtp) {
          setCorrectOtp(true);
        }
      }, [props.checkedOtp]);

      const navigate = useNavigate();
  return (
    <>
        {!correctOtp && (
            <>
                <div className='blur'></div>
                <div id='login' className='login min-h-screen'>
                <Navbar />
                <Main2 />
                </div>
                <div className='relative w-full max-w-lg shadow-md mx-auto items-center justify-center'>
                    <div className='login__form h-screen flex flex-col items-center justify-center p-4 md:p-0 px-14 py-7 rounded-md bg-[#a79f9f] shadow-2xl space-y-4 md:space-y-12'>

                        <div className="z-10 absolute">
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
                    </div>
                </div>
            </>
        )
        }
        {
            verifyRegOtp && (
                <Navigate to='/login' />
            ) 
        }

    </>
  )
}

const mapStateToProps = (state) => {
    return {
      forgotPasswordResp: state.userReducer.forgotPasswordResp,
      checkedOtp: state.userReducer.verifyOtp,
      checkedOtpError: state.userReducer.verifyOtpError,
      newPasswordResp: state.userReducer.newPasswordResp,
      changePasswordError: state.userReducer.changePasswordError,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      verifyOtp: (userOtp) => dispatch(verifyOtp(userOtp)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(VerifyRegisterOtp);