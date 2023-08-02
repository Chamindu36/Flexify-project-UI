import { createAction } from '../../utils/reducer.utils';
import {
    deleteWorkoutType,
    updateWorkoutType,
    addWorkoutType
} from '../../services/workout-types.service';
import { WORKOUT_TYPE_ACTION_TYPES } from './workout.types';


const deleteWorkoutTypes = async (title) => {
    try {
        return await deleteWorkoutType(title);
    } catch (error) {
        // Handle the error here, if any
    }
};


const updateWorkoutTypes = async (title, updatedData) => {
    try {
        return await updateWorkoutType(title, updatedData);
    } catch (error) {
        // Handle the error here, if any
    }
};

const addNewWorkoutType = async (newWorkoutType) => {

    try {
        return await addWorkoutType(newWorkoutType);
    } catch (error) {
        // Handle the error here, if any
    }
};


export const addWorkoutTypeAction = async (newData) => {
    const newWorkouTypes = await addNewWorkoutType(newData);
    return createAction(WORKOUT_TYPE_ACTION_TYPES.SET_WORKOUT_TYPES, newWorkouTypes);
};

export const updateWorkoutTypeAction = async (title, updatedData) => {
    const newWorkouTypes = await updateWorkoutTypes(title, updatedData);
    return createAction(WORKOUT_TYPE_ACTION_TYPES.SET_WORKOUT_TYPES, newWorkouTypes);
};

export const deleteWorkoutTypeAction = async (title) => {
    const newWorkouTypes = await deleteWorkoutTypes(title);
    return createAction(WORKOUT_TYPE_ACTION_TYPES.SET_WORKOUT_TYPES, newWorkouTypes);
};

export const setWorkoutTypes = async (workoutTypesArray) =>
    createAction(WORKOUT_TYPE_ACTION_TYPES.SET_WORKOUT_TYPES, workoutTypesArray);