import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { mealTypeReducer } from "./meal-type/meal-type.reducer";
import { workoutTypeReducer } from "./workout-type/workout-type.reducer";
import { cheatMealsReducer } from "./cheat-meal/cheat-meal.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    mealType: mealTypeReducer,
    workoutType: workoutTypeReducer,
    cheatMeal: cheatMealsReducer,
});