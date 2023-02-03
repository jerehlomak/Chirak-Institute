import { ActionTypes } from "../constants/actionTypes";
const INITIAL_STATE = {
  authError: "",
  forgotError: null,
  // token: null,
};
export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ERROR:
      return { ...state, authError: payload };
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, studentExists: payload };
    case ActionTypes.GET_TOKEN:
      console.log(payload);
      return { ...state, token: payload };
    case ActionTypes.FORGOT_PASSWORD:
      return {
        ...state,
        forgotPasswordResp: payload,
        loading: false,
      };
    case ActionTypes.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotError: payload,
      };
    case ActionTypes.CHECK_OTP:
      return { ...state, checkedOtp: payload };
    case ActionTypes.CHECK_OTP_ERROR:
      return { ...state, checkedOtpError: payload };
    case ActionTypes.VERIFY_OTP:
      return { ...state, verifyOtp: payload };
    case ActionTypes.VERIFY_OTP_ERROR:
      return { ...state, verifyOtpError: payload };
    case ActionTypes.RESET_OTP:
      return { ...state, resetOtp: payload };
    case ActionTypes.CHANGE_PASSWORD:
      return { ...state, newPasswordResp: payload };
    case ActionTypes.CHANGE_PASSWORD_ERROR:
      return { ...state, changePasswordError: payload };
    case ActionTypes.SIGNUP_SUCCESS:
      return { ...state, signupSuccess: payload };
    case ActionTypes.SIGNUP_ERROR:
      return { ...state, signupError: payload };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, authError: null };
    case ActionTypes.DASHBOARD_SUCCESS:
      console.log(payload);
      return { ...state, authError: null, dashboard: payload };

    default:
      return state;
  }
};
