import { createContext, useState, useEffect } from 'react';
import { getMealTypes } from '../services/meal-types.service';

export const MealTypesContext = createContext({
    mealTypes: [],
});

export const MealTypesProvider = ({ children }) => {
    const [mealTypes, setMealTypes] = useState([]);
    const value = { mealTypes, setMealTypes };

    useEffect(() => {
        const fetchMealTypes = async () => {
            const data = await getMealTypes();
            setMealTypes(data);
        };

        fetchMealTypes();
    }, []);

    return <MealTypesContext.Provider value={value}>
        {children}
    </MealTypesContext.Provider>;
}