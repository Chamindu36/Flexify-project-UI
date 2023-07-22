import { createContext, useState, useEffect } from 'react';
import {
    getWorkoutTypes,
    updateWorkoutType,
    deleteWorkoutType,
    addWorkoutType
} from '../services/workout-types.service';

export const WorkoutTypesContext = createContext({
    workoutTypes: [],
    updateWorkoutType: () => { },
    deleteWorkoutType: () => { },
    addWorkoutType: () => { },
});

export const WorkoutTypesProvider = ({ children }) => {
    const [workoutTypes, setWorkoutTypes] = useState([]);

    useEffect(() => {
        const fetchWorkoutTypes = async () => {
            const data = await getWorkoutTypes();
            setWorkoutTypes(data);
        };

        fetchWorkoutTypes();
    }, []);

    useEffect(() => {
        // You can add any side effect that depends on the mealTypes array changes here
        console.log('Workout Types array changed:', workoutTypes);
    }, [workoutTypes]);

    const updateWorkoutTypes = async (title, updatedData) => {
        try {
            const updatedWorkoutType = await updateWorkoutType(title, updatedData);
            setWorkoutTypes((prevWorkoutTypes) =>
                prevWorkoutTypes.map((mealType) =>
                    mealType.title === title ? { ...mealType, ...updatedWorkoutType } : mealType
                )
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const deleteWorkoutItem = async (title) => {
        try {
            await deleteWorkoutType(title);
            setWorkoutTypes((prevWorkoutTypes) =>
                prevWorkoutTypes.filter((WorkoutType) => WorkoutType.title !== title)
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const addNewWorkoutType = async (newWorkoutType) => {

        console.log(`adding ${newWorkoutType.title} to the Workout types in context`);
        try {
            await addWorkoutType(newWorkoutType);
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const value = {
        workoutTypes: workoutTypes,
        updateWorkoutType: updateWorkoutTypes,
        deleteWorkoutType: deleteWorkoutItem,
        addWorkoutType: addNewWorkoutType,
    };

    return (
        <WorkoutTypesContext.Provider value={value}>
            {children}
        </WorkoutTypesContext.Provider>
    );
};
