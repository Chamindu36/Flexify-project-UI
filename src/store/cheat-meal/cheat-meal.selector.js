import { createSelector } from "reselect";

const selectCheatMealReducer = (state) => state.cheatMeal;

export const selectCheatMeals = createSelector(
    [selectCheatMealReducer],
    (cheatMeal) => cheatMeal.cheatMeals
);