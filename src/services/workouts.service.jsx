import { getWorkoutType } from "./workout-types.service";

export const getWorkoutEntries = async () => {
    try {
        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/workoutrecord");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching workout entries:", error);
        return [];
    }
};

export const updateWorkoutEntry = async (entryIdToUpdate, updatedWorkoutInput) => {
    try {
        const { workoutId, consumedTime, weight } = updatedWorkoutInput;

        const { imageUrl, title } = await getWorkoutType(workoutId);

        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/workoutrecord/${entryIdToUpdate}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 77, // Replace with the actual user ID from your application
                workoutId,
                workoutTitle: title,
                imageUrl,
                consumedTime: new Date(consumedTime),
                weight,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update workout entry");
        }

        await response.json();
        return getWorkoutEntries();
    } catch (error) {
        console.error("Error updating workout entry:", error);
        return [];
    }
};

export const addWorkoutEntry = async (newWorkoutInput) => {
    if (!newWorkoutInput) {
        return;
    }

    try {
        const { workoutId, consumedTime, weight } = newWorkoutInput;

        const { imageUrl, title } = await getWorkoutType(workoutId);

        const response = await fetch("https://fitappocelotgateway.azurewebsites.net:443/gateway/workoutrecord", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 77, // Replace with the actual user ID from your application
                workoutId,
                workoutTitle: title,
                imageUrl,
                consumedTime: new Date(consumedTime),
                weight,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add workout entry");
        }

        await response.json();
        return getWorkoutEntries();
    } catch (error) {
        console.error("Error adding workout entry:", error);
        return [];
    }
};

export const deleteWorkoutEntry = async (entryIdToDelete) => {
    try {
        const response = await fetch(`https://fitappocelotgateway.azurewebsites.net:443/gateway/workoutrecord/${entryIdToDelete}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete workout entry");
        }

        await response.json();
        return getWorkoutEntries();
    } catch (error) {
        console.error("Error deleting workout entry:", error);
        return [];
    }
};