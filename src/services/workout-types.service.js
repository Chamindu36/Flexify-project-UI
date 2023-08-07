
export const getWorkoutTypes = async () => {
    try {
        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/workouttype");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching workout types:", error);
        return [];
    }
};

export const getWorkoutType = async (id) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/workouttype/${id}`);

        return await response.json();
    } catch (error) {
        console.error("Error fetching workout type:", error);
        return null;
    }
};

export const addWorkoutType = async (newWorkoutTypeInput) => {
    if (!newWorkoutTypeInput) {
        return;
    }

    try {
        const { title, imageUrl, description, calories } = newWorkoutTypeInput;
        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/workouttype", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                imageUrl,
                description,
                calories,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add workout type");
        }

        await response.json();
        return getWorkoutTypes();
    } catch (error) {
        console.error("Error adding workout type:", error);
        return [];
    }
};

export const updateWorkoutType = async (workoutTypeId, updatedWorkoutTypeInput) => {
    try {
        const { title, imageUrl, description, calories } = updatedWorkoutTypeInput;

        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/workouttype/${workoutTypeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                imageUrl,
                description,
                calories,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update workout type");
        }

        await response.json();
        return getWorkoutTypes();
    } catch (error) {
        console.error("Error updating workout type:", error);
        return [];
    }
};

export const deleteWorkoutType = async (workoutTypeId) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/workouttype/${workoutTypeId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete workout type");
        }

        await response.json();
        return getWorkoutTypes();
    } catch (error) {
        console.error("Error deleting workout type:", error);
        return [];
    }
};
