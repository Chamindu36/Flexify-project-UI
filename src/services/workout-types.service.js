const WORKOUT_TYPES = [
    {
        id: 1,
        title: 'Running',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        description: 'Run Activity',
        calories: 8,
    },
    {
        id: 2,
        title: 'Jogging',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Run Activity',
        calories: 400,
    },
    {
        id: 3,
        title: 'Bench Press',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Weight Lifting',
        calories: 500,
    },
    {
        id: 4,
        title: 'Squats',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Weight Lifting',
        calories: 600,
    },
    {
        id: 5,
        title: 'Treadmill',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Cardio',
        calories: 50,
    },
    {
        id: 6,
        title: 'Jump Rope',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Cardio',
        calories: 50,
    },
    {
        id: 7,
        title: 'Yoga',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Relaxation',
        calories: 50,
    },
];

const getLastWorkoutTypeId = () => WORKOUT_TYPES[WORKOUT_TYPES.length - 1].id;

export const getWorkoutTypes = async () => WORKOUT_TYPES;

export const getWorkoutType = async (workoutTitle) =>
    WORKOUT_TYPES.find((workoutType) => workoutType.title.toLocaleLowerCase === workoutTitle);

export const addWorkoutType = async (newWorkoutTypeInput) => {
    if (!newWorkoutTypeInput) {
        return;
    }
    console.log("Add workout type service called", newWorkoutTypeInput);

    const { title, imageUrl, description, calories } = newWorkoutTypeInput;
    const id = getLastWorkoutTypeId() + 1;

    const existingWorkoutType = WORKOUT_TYPES.find(
        (workoutType) => workoutType.title.toLowerCase() === title.toLowerCase(),
    );

    if (existingWorkoutType) {
        alert('Workout type already exists');
        return;
    } else {
        WORKOUT_TYPES.push({
            id,
            title,
            imageUrl,
            description,
            calories,
        });
    }
    return WORKOUT_TYPES;
}

export const deleteWorkoutType = async (workoutTypeTitle) => {
    const workoutTypeIndex = WORKOUT_TYPES.findIndex(
        (workoutType) => workoutType.title.toLowerCase() === workoutTypeTitle.toLowerCase(),
    );

    if (workoutTypeIndex !== -1) {
        WORKOUT_TYPES.splice(workoutTypeIndex, 1);
    }
    return WORKOUT_TYPES;
}

export const updateWorkoutType = async (workoutTypeTitle, updatedWorkoutTypeInput) => {
    console.log("Update workout type service called", updatedWorkoutTypeInput);
    const { title, imageUrl, description, calories } = updatedWorkoutTypeInput;

    const workoutTypeIndex = WORKOUT_TYPES.findIndex(
        (workoutType) => workoutType.title.toLowerCase() === workoutTypeTitle.toLowerCase(),
    );

    if (workoutTypeIndex !== -1) {
        WORKOUT_TYPES[workoutTypeIndex] = {
            title,
            imageUrl,
            description,
            calories,
        };
    }
    return WORKOUT_TYPES;
}