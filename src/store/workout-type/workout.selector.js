import { createSelector } from "reselect";

const selectWorkoutTypeReducer = (state) => {
    console.log("111111", state);
    return state.workoutType;
}
export const selectWorkoutTypes = createSelector(
    [selectWorkoutTypeReducer],
    (workoutType) => workoutType.workoutTypes
)