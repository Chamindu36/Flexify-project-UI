const WORKOUTS = [
    {
        entryId: '1',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '2',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '3',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '4',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '5',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
]
const getLastWorkoutEntryId = () => WORKOUTS[WORKOUTS.length - 1].entryId;

export const getWorkoutEntries = async () => WORKOUTS;

export const addWorkoutEntry = async (newWorkoutInput) => {
    if (!newWorkoutInput) {
        return;
    }
    console.log("Add meal type service called", newWorkoutInput);

    const { workoutId, workoutTitle, imageUrl, consumedTime, weight } = newWorkoutInput;
    const entryId = getLastWorkoutEntryId() + 1;


    WORKOUTS.push({
        entryId,
        workoutId,
        workoutTitle,
        imageUrl,
        consumedTime,
        weight,
    });

    return WORKOUTS;
}

export const deleteWorkoutEntry = async (entryIdToDelete) => {
    const workoutEntryIndex = WORKOUTS.findIndex(
        (entry) => entry.mealId === entryIdToDelete,
    );

    if (workoutEntryIndex !== -1) {
        WORKOUTS.splice(workoutEntryIndex, 1);
    }
    return WORKOUTS;
}

export const updateWorkoutEntry = async (entryIdToUpdate, updatedWorkoutInput) => {
    console.log("Update meal type service called", updatedWorkoutInput);
    const { workoutId, workoutTitle, imageUrl, consumedTime, weight } = updatedWorkoutInput;

    const mealTypeIndex = WORKOUTS.findIndex(
        (entry) => entry.entryId === entryIdToUpdate,
    );

    if (mealTypeIndex !== -1) {
        WORKOUTS[mealTypeIndex] = {
            workoutId,
            workoutTitle,
            imageUrl,
            consumedTime,
            weight,
        };
    }
    return WORKOUTS;
}