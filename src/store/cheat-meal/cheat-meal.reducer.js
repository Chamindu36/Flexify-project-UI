import { CHEAT_MEALS_ACTION_TYPES } from "./cheat-meal.types";

const CHEAT_MEALS_INITIAL_STATE = {
    cheatMeals: [],
};

export const cheatMealsReducer = (state = CHEAT_MEALS_INITIAL_STATE, action = {}) => {

    const { type, payload } = action;

    switch (type) {
        case CHEAT_MEALS_ACTION_TYPES.SET_CHEAT_MEALS:

            return {
                ...state,
                cheatMeals: payload,
            };
        default:
            return state;
    }
};