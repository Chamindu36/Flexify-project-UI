import { createAction } from '../../utils/reducer.utils';
import {
    deleteMealType,
    updateMealType,
    addMealType
} from '../../services/meal-types.service';
import { MEAL_TYPE_ACTION_TYPES } from './meal-type.types';


const deleteMealItem = async (title) => {
    try {
        return await deleteMealType(title);
    } catch (error) {
        // Handle the error here, if any
    }
};


const updateMealTypes = async (title, updatedData) => {
    try {
        return await updateMealType(title, updatedData);
    } catch (error) {
        // Handle the error here, if any
    }
};

const addNewMealType = async (newMealType) => {

    try {
        return await addMealType(newMealType);
    } catch (error) {
        // Handle the error here, if any
    }
};


export const addMealTypeAction = async (newData) => {
    const newMealTypes = await addNewMealType(newData);
    return createAction(MEAL_TYPE_ACTION_TYPES.SET_MEAL_TYPES, newMealTypes);
};

export const updateMealTypeAction = async (title, updatedData) => {
    const newMealTypes = await updateMealTypes(title, updatedData);
    return createAction(MEAL_TYPE_ACTION_TYPES.SET_MEAL_TYPES, newMealTypes);
};

export const deleteMealTypeAction = async (title) => {
    const newMealTypes = await deleteMealItem(title);
    return createAction(MEAL_TYPE_ACTION_TYPES.SET_MEAL_TYPES, newMealTypes);
};

export const setMealTypes = async (mealTypesArray) =>
    createAction(MEAL_TYPE_ACTION_TYPES.SET_MEAL_TYPES, mealTypesArray);;