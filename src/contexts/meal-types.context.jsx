import { createContext, useState, useEffect } from 'react';
import {
    getMealTypes,
    updateMealType,
    deleteMealType,
    addMealType
} from '../services/meal-types.service';

export const MealTypesContext = createContext({
    mealTypes: [],
    updateMealType: () => { },
    deleteMealType: () => { },
    addMealType: () => { },
});

export const MealTypesProvider = ({ children }) => {
    const [mealTypes, setMealTypes] = useState([]);

    useEffect(() => {
        const fetchMealTypes = async () => {
            const data = await getMealTypes();
            setMealTypes(data);
        };

        fetchMealTypes();
    }, []);

    useEffect(() => {
        // You can add any side effect that depends on the mealTypes array changes here
        console.log('mealTypes array changed:', mealTypes);
    }, [mealTypes]);

    const updateMealTypes = async (title, updatedData) => {
        try {
            const updatedMealType = await updateMealType(title, updatedData);
            setMealTypes((prevMealTypes) =>
                prevMealTypes.map((mealType) =>
                    mealType.title === title ? { ...mealType, ...updatedMealType } : mealType
                )
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const deleteMealItem = async (title) => {
        try {
            await deleteMealType(title);
            setMealTypes((prevMealTypes) =>
                prevMealTypes.filter((mealType) => mealType.title !== title)
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const addNewMealType = async (newMealType) => {

        console.log(`adding ${newMealType.title} to the meal types in context`);
        try {
            await addMealType(newMealType);
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const value = {
        mealTypes,
        updateMealType: updateMealTypes,
        deleteMealType: deleteMealItem,
        addMealType: addNewMealType,
    };

    return (
        <MealTypesContext.Provider value={value}>
            {children}
        </MealTypesContext.Provider>
    );
};
