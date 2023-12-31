import { getMealType } from "./meal-types.service";

export const getCheatMeals = async () => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealrecord?userid=77`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cheat meal records:", error);
        return [];
    }
};

export const getCheatMeal = async (mealId) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealrecord/${mealId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cheat meal record:", error);
        return null;
    }
};

export const addCheatMeal = async (newCheatMealInput) => {
    if (!newCheatMealInput) {
        return;
    }

    try {
        const { mealId, consumedTime, weight } = newCheatMealInput;

        const { imageUrl, title } = await getMealType(mealId);

        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealrecord", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 77, // Replace with the actual user ID from your application
                mealId,
                mealType: title,
                imageUrl,
                consumedTime: new Date(consumedTime),
                weight,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add cheat meal record");
        }

        await response.json();
        return getCheatMeals();
    } catch (error) {
        console.error("Error adding cheat meal record:", error);
        return [];
    }
};


export const updateCheatMeal = async (mealIdToUpdate, updatedCheatMealInput) => {
    try {
        const { mealId, consumedTime, weight } = updatedCheatMealInput;

        const { imageUrl, title } = await getMealType(mealId);

        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealrecord/${mealIdToUpdate}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                userId: 77, // Replace with the actual user ID from your application
                mealId,
                mealType: title,
                imageUrl,
                consumedTime: new Date(consumedTime),
                weight,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update cheat meal record");
        }

        await response.json();
        return getCheatMeals();
    } catch (error) {
        console.error("Error updating cheat meal record:", error);
        return [];
    }
};


export const deleteCheatMeal = async (mealIdToDelete) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealrecord/${mealIdToDelete}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete cheat meal record");
        }

        await response.json();
        return getCheatMeals();
    } catch (error) {
        console.error("Error deleting cheat meal record:", error);
        return [];
    }
};

