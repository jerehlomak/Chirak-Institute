import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changePassword } from "../../store/actions/user.action";
import { Navbar } from "..";
import { Main2 } from "..";

const PasswordChanged = (props) => {
  const { changed } = props;
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    if (changed) {
      const {
        newPasswordResp: { message },
      } = props;
      setNewMessage(message);
    }
  }, [changed]);

  return (
    <>
      {changed && (
        <>
          <div className='blur'></div>
          <div id='login' className='login min-h-screen'>
            <Navbar />
            <Main2 />
          </div>
          <div className='w-full max-w-lg shadow-md'>
            <div className='login__form flex flex-col items-center justify-center p-4 md:p-0 px-14 py-7 rounded-full shadow-2xl space-y-4 md:space-y-12'>
              <div className='form relative mb-0'>
                <p className=' text-black font-semibold'>{newMessage}</p>
                <Link to='/'>
                  <button className='btn-red w-full h-11 mt-3'>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    changed: state.userReducer.changed,
    newPasswordResp: state.userReducer.newPasswordResp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (otp, newPassword) =>
      dispatch(changePassword(otp, newPassword)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PasswordChanged);
