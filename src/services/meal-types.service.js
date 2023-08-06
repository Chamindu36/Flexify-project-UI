export const getMealTypes = async () => {
    try {
        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealtype");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cheat meal types:", error);
        return [];
    }
};

export const getMealType = async (cheatMealTypeId) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealtype/${cheatMealTypeId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cheat meal type:", error);
        return null;
    }
};


export const addMealType = async (newCheatMealTypeInput) => {
    if (!newCheatMealTypeInput) {
        return;
    }

    try {
        const { title, imageUrl, description, calories } = newCheatMealTypeInput;
        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealtype", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                imageUrl,
                description,
                calories
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add cheat meal type");
        }

        await response.json();
        return getMealTypes();
    } catch (error) {
        console.error("Error adding cheat meal type:", error);
        return [];
    }
};

export const updateMealType = async (cheatMealTypeId, updatedCheatMealTypeInput) => {
    try {
        const { title, imageUrl, description, calories } = updatedCheatMealTypeInput;
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealtype/${cheatMealTypeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                imageUrl,
                description,
                calories
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update cheat meal type");
        }

        await response.json();
        return getMealTypes();
    } catch (error) {
        console.error("Error updating cheat meal type:", error);
        return [];
    }
};


export const deleteMealType = async (cheatMealTypeId) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/cheatmealtype/${cheatMealTypeId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete cheat meal type");
        }

        await response.json();
        return getMealTypes();
    } catch (error) {
        console.error("Error deleting cheat meal type:", error);
        return [];
    }
};
