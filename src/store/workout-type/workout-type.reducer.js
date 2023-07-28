import { WORKOUT_TYPE_ACTION_TYPES } from "./workout.types";

const WORKOUT_TYPE_INITIAL_STATE = {
    workoutTypes: [],
};

export const workoutTypeReducer = (state = WORKOUT_TYPE_INITIAL_STATE, action = {}) => {

    const { type, payload } = action;

    switch (type) {
        case WORKOUT_TYPE_ACTION_TYPES.SET_WORKOUT_TYPES:

            return {
                ...state,
                workoutTypes: payload,
            };
        default:
            return state;
    }
};
