const CHEAT_MEALS = [
    {
        entryId: '1',
        mealId: '1',
        mealType: 'Pizza',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100',
    },
    {
        entryId: '2',
        mealId: '1',
        mealType: 'Pizza',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 3),
        weight: '101',
    },
    {
        entryId: '3',
        mealId: '2',
        mealType: 'Burger',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        consumedTime: new Date(2023, 7, 3),
        weight: '101',
    },
    {
        entryId: '4',
        mealId: '3',
        mealType: 'Pasta',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        consumedTime: new Date(2023, 7, 3),
        weight: '105',
    },
    {
        entryId: '5',
        mealId: '4',
        mealType: 'Cheese Fries',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        consumedTime: new Date(2023, 7, 8),
        weight: '103',
    },
]
const getLastCheatMealId = () => CHEAT_MEALS[CHEAT_MEALS.length - 1].id;

export const getCheatMeals = async () => CHEAT_MEALS;

export const addCheatMeal = async (newCheatMealInput) => {
    if (!newCheatMealInput) {
        return;
    }
    console.log("Add meal type service called", newCheatMealInput);

    const { mealId, mealType, imageUrl, consumedTime, weight } = newCheatMealInput;
    const id = getLastCheatMealId() + 1;

    CHEAT_MEALS.push({
        id,
        mealId,
        mealType,
        imageUrl,
        consumedTime,
        weight,
    });

    return CHEAT_MEALS;
}

export const deleteCheatMeal = async (mealIdToDelete) => {
    const mealTypeIndex = CHEAT_MEALS.findIndex(
        (meal) => meal.mealId === mealIdToDelete,
    );

    if (mealTypeIndex !== -1) {
        CHEAT_MEALS.splice(mealTypeIndex, 1);
    }
    return CHEAT_MEALS;
}

export const updateCheatMeal = async (mealIdToUpdate, updatedCheatMealInput) => {
    console.log("Update meal type service called", updatedCheatMealInput);
    const { mealId, mealType, imageUrl, consumedTime, weight } = updatedCheatMealInput;

    const mealTypeIndex = CHEAT_MEALS.findIndex(
        (meal) => meal.entryId === mealIdToUpdate,
    );

    if (mealTypeIndex !== -1) {
        CHEAT_MEALS[mealTypeIndex] = {
            mealId,
            mealType,
            imageUrl,
            consumedTime,
            weight,
        };
    }
    return CHEAT_MEALS;
}