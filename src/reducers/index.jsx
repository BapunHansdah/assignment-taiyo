//for combining the reducers

import {GET_PROFILE_DATA,CONTACT} from "./List";
import { combineReducers } from "redux";
const reducers = combineReducers({GET_PROFILE_DATA,CONTACT});
export default reducers;