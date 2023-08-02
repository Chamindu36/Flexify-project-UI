import { createSelector } from "reselect";

const selectMealTypeReducer = (state) => state.mealType;

export const selectMealTypes = createSelector(
    [selectMealTypeReducer],
    (mealType) => mealType.mealTypes
)