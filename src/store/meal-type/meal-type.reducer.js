import { MEAL_TYPE_ACTION_TYPES } from "./meal-type.types";

const MEAL_TYPE_INITIAL_STATE = {
    mealTypes: [],
};

export const mealTypeReducer = (state = MEAL_TYPE_INITIAL_STATE, action = {}) => {

    const { type, payload } = action;

    switch (type) {
        case MEAL_TYPE_ACTION_TYPES.SET_MEAL_TYPES:

            return {
                ...state,
                mealTypes: payload,
            };
        default:
            return state;
    }
};
