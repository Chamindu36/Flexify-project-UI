import { createContext, useState, useEffect } from 'react';

import {
    getCheatMeals,
    updateCheatMeal,
    deleteCheatMeal,
    addCheatMeal,
} from '../services/cheat-meals.service';

export const CheatMealsContext = createContext({
    cheatMeals: [],
    updateCheatMeal: () => { },
    deleteCheatMeal: () => { },
    addCheatMeal: () => { },
});

export const CheatMealsProvider = ({ children }) => {
    const [cheatMeals, setCheatMeals] = useState([]);

    useEffect(() => {
        const fetchCheatMeals = async () => {
            const data = await getCheatMeals();
            setCheatMeals(data);
        };

        fetchCheatMeals();
    }, []);

    useEffect(() => {
        // You can add any side effect that depends on the cheatMeals array changes here
        console.log('cheatMeals array changed:', cheatMeals);
    }, [cheatMeals]);

    const updateCheatMealItem = async (id, updatedData) => {
        try {
            const updatedCheatMeal = await updateCheatMeal(id, updatedData);
            setCheatMeals((prevCheatMeals) =>
                prevCheatMeals.map((cheatMeal) =>
                    cheatMeal.id === id ? { ...cheatMeal, ...updatedCheatMeal } : cheatMeal
                )
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const deleteCheatMealItem = async (id) => {
        try {
            await deleteCheatMeal(id);
            setCheatMeals((prevCheatMeals) =>
                prevCheatMeals.filter((cheatMeal) => cheatMeal.id !== id)
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const addNewCheatMeal = async (newCheatMeal) => {
        console.log(`Adding ${newCheatMeal} to the cheat meals in context`);
        try {
            await addCheatMeal(newCheatMeal);
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const value = {
        cheatMeals,
        addCheatMeal: addNewCheatMeal,
        updateCheatMeal: updateCheatMealItem,
        deleteCheatMeal: deleteCheatMealItem,
    };

    return (
        <CheatMealsContext.Provider value={value}>
            {children}
        </CheatMealsContext.Provider>
    );
};
