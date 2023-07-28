import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { mealTypeReducer } from "./meal-type/meal-type.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    mealType: mealTypeReducer,
});