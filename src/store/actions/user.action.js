import axios from "axios";

export const handleChange = (name, value) => {
  return (dispatch) => {
    console.log(name);
    console.log(value);
    dispatch({
      type: "SET_FORMVALUES",
      payload: {
        name,
        value,
      },
    });
  };
};

export const loginUser = (userCred) => {
  return (dispatch) => {
    console.log(userCred);
    axios
      .post("/auth/login", userCred)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("success", response.data.success);
        dispatch({
          type: "GET_TOKEN",
          payload: response.data.data.token,
        });

        console.log(response.data.data.user);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data.user,
        });
      })
      .catch((error) => {
        // const { code } = error;
        // if (code === "ERR_NETWORK") {
        //   const message = "CHECK YOUR NETWORK";
        //   dispatch({
        //     type: "LOGIN_ERROR",
        //     payload: message,
        //   });
        // } else if (code === "ERR_BAD_REQUEST") {
        //   const message = "INCORRECT FORM CREDENTIALS";
        //   dispatch({
        //     type: "LOGIN_ERROR",
        //     payload: message,
        //   });
        // } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "LOGIN ERROR",
        });
        // }
        console.log(error);
      });
  };
};

export const signUpUser = (userDetails) => {
  return (dispatch) => {
    console.log(userDetails);
    axios.post("/auth/register", userDetails).then((response) => {
      // localStorage.setItem("token", response.data.data.token);

      console.log(response);
      // dispatch({
      //   type: "LOGIN_SUCCESS",
      //   payload: response.data.data.studentExists,
      // });
    });
  };
};

export const forgotPassword = (userEmail) => {
  return (dispatch) => {
    axios
      .post("auth/reset-password", userEmail)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "FORGOT_PASSWORD",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        const { code } = error;
        if (code === "ERR_BAD_REQUEST") {
          const message = "EMAIL DOES NOT EXIST";
          dispatch({
            type: "FORGOT_PASSWORD_ERROR",
            payload: message,
          });
        } else if (code === "ERR_NETWORK") {
          const message = "CHECK YOUR NETWORK AND RETRY";
          dispatch({
            type: "FORGOT_PASSWORD_ERROR",
            payload: message,
          });
        }
      });
  };
};
export const verifyOtp = (userOtp) => {
  return (dispatch) => {
    axios
      .post("auth/verify-email", userOtp)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "VERIFY_OTP",
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
        const { code } = error;
        if (code === "ERR_BAD_REQUEST") {
          const message = "REQUEST FAILED: ENTER VALID OTP";
          dispatch({
            type: "VERIFY_OTP_ERROR",
            payload: message,
          });
        } else if (code === "ERR_NETWORK") {
          const message = "CHECK YOUR NETWORK";
          dispatch({
            type: "VERIFY_OTP_ERROR",
            payload: message,
          });
        }
      });
  };
};
export const checkOtp = (userOtp) => {
  return (dispatch) => {
    axios
      .post("auth/check-otp", userOtp)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "CHECK_OTP",
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
        const { code } = error;
        if (code === "ERR_BAD_REQUEST") {
          const message = "REQUEST FAILED: ENTER VALID OTP";
          dispatch({
            type: "CHECK_OTP_ERROR",
            payload: message,
          });
        } else if (code === "ERR_NETWORK") {
          const message = "CHECK YOUR NETWORK";
          dispatch({
            type: "CHECK_OTP_ERROR",
            payload: message,
          });
        }
      });
  };
};
export const changePassword = (otp, newPassword) => {
  return (dispatch) => {
    console.log(otp);
    console.log(newPassword);
    axios
      .post(`auth/change-password/${otp}`, newPassword)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "CHANGE_PASSWORD",
          payload: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
        const { code } = error;
        if (code === "ERR_BAD_REQUEST") {
          const message = "UNABLE TO CHANGE PASSWORD";
          dispatch({
            type: "CHANGE_PASSWORD_ERROR",
            payload: message,
          });
        } else if (code === "ERR_NETWORK") {
          const message = "CHECK YOUR NETWORK AND TRY AGAIN";
          dispatch({
            type: "CHANGE_PASSWORD_ERROR",
            payload: message,
          });
        }
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT_SUCCESS",
    });
  };
};
// export const userProfile = () => {
//   return (dispatch) => {
//     const varToken = localStorage.getItem("token");
//     axios
//       .get("https://api-chirak.herokuapp.com/api/v1/user/profile", {
//         headers: {
//           "x-access-token": varToken,
//         },
//       })
//       .then((response) => {
//         console.log(response);
//         dispatch({
//           type: "DASHBOARD_SUCCESS",
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const userProfile = (profile) => {
  return {
    type: "DASHBOARD_SUCCESS",
    payload: profile,
  };
};
