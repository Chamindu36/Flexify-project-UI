import { createSelector } from "reselect";

const selectMealTypeReducer = (state) => state.mealType;

console.log("YYYY", selectMealTypeReducer);

export const selectMealTypes = createSelector(
    [selectMealTypeReducer],
    (mealType) => mealType.mealTypes
)