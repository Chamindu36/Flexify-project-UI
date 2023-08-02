import { createAction } from '../../utils/reducer.utils';

import {
    updateCheatMeal,
    deleteCheatMeal,
    addCheatMeal,
} from '../../services/cheat-meals.service';

import { CHEAT_MEALS_ACTION_TYPES } from './cheat-meal.types';

const updateCheatMealItem = async (id, updatedData) => {
    try {
        return await updateCheatMeal(id, updatedData);
    } catch (error) {
        // Handle the error here, if any
    }
};

const deleteCheatMealItem = async (id) => {
    try {
        return await deleteCheatMeal(id);
    } catch (error) {
        // Handle the error here, if any
    }
};

const addNewCheatMeal = async (newCheatMeal) => {
    try {
        return await addCheatMeal(newCheatMeal);
    } catch (error) {
        // Handle the error here, if any
    }
};

export const addCheatMealAction = async (newData) => {
    const newCheatMeal = await addNewCheatMeal(newData);
    return createAction(CHEAT_MEALS_ACTION_TYPES.SET_CHEAT_MEALS, newCheatMeal);
};

export const updateCheatMealAction = async (id, updatedData) => {
    const newCheatMeal = await updateCheatMealItem(id, updatedData);
    return createAction(CHEAT_MEALS_ACTION_TYPES.SET_CHEAT_MEALS, newCheatMeal);
};

export const deleteCheatMealAction = async (id) => {
    const newCheatMeal = await deleteCheatMealItem(id);
    return createAction(CHEAT_MEALS_ACTION_TYPES.SET_CHEAT_MEALS, newCheatMeal);
};

export const setCheatMeals = async (cheatMealsArray) =>
    createAction(CHEAT_MEALS_ACTION_TYPES.SET_CHEAT_MEALS, cheatMealsArray);

