import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { AuthReducer } from './AuthReducer'
import { CourseReducer, GetCourseReducer } from "./CourseReducer";

import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  userReducer: userReducer,
  AuthReducer: AuthReducer,
  addCourse: CourseReducer,
  allCourses: GetCourseReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT_SUCCESS") {
    storage.removeItem("persist:root");
    localStorage.clear();
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
