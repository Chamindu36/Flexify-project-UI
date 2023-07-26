import { getWorkoutType } from "./workout-types.service";

const WORKOUTS = [
    {
        entryId: '21',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '22',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 12),
        weight: '100',
    },
    {
        entryId: '23',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 7),
        weight: '100',
    },
    {
        entryId: '24',
        workoutId: '1',
        workoutTitle: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '25',
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
    console.log("Add workout service called", newWorkoutInput);

    const { workoutId, consumedTime, weight } = newWorkoutInput;
    const entryId = getLastWorkoutEntryId() + 1;

    console.log("entryId", entryId);

    const { imageUrl, title } = await getWorkoutType(workoutId);


    WORKOUTS.push({
        entryId,
        workoutId,
        workoutTitle: title,
        imageUrl,
        consumedTime: new Date(consumedTime),
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
    const { workoutId, consumedTime, weight } = updatedWorkoutInput;

    const mealTypeIndex = WORKOUTS.findIndex(
        (entry) => entry.entryId === entryIdToUpdate,
    );

    const { imageUrl, title } = await getWorkoutType(workoutId);

    if (mealTypeIndex !== -1) {
        WORKOUTS[mealTypeIndex] = {
            workoutId,
            workoutTitle: title,
            imageUrl,
            consumedTime: new Date(consumedTime),
            weight,
        };
    }
    return WORKOUTS;
}