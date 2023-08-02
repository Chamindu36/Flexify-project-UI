import { getMealType } from "./meal-types.service";

const CHEAT_MEALS = [
    {
        entryId: '11',
        mealId: '1',
        mealType: 'Pizza',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 1),
        weight: '100.5',
    },
    {
        entryId: '12',
        mealId: '1',
        mealType: 'Pizza',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        consumedTime: new Date(2023, 7, 3),
        weight: '101.2',
    },
    {
        entryId: '13',
        mealId: '2',
        mealType: 'Burger',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        consumedTime: new Date(2023, 7, 3),
        weight: '101.0',
    },
    {
        entryId: '14',
        mealId: '3',
        mealType: 'Pasta',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        consumedTime: new Date(2023, 7, 3),
        weight: '98.7',
    },
    {
        entryId: '15',
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

    const { mealId, consumedTime, weight } = newCheatMealInput;
    const id = getLastCheatMealId() + 1;

    const { imageUrl, title } = await getMealType(mealId);

    CHEAT_MEALS.push({
        id,
        mealId,
        mealType: title,
        imageUrl,
        consumedTime: new Date(consumedTime),
        weight,
    });

    return CHEAT_MEALS;
}

export const deleteCheatMeal = async (mealIdToDelete) => {
    const mealTypeIndex = CHEAT_MEALS.findIndex(
        (meal) => meal.entryId === mealIdToDelete,
    );

    if (mealTypeIndex !== -1) {
        CHEAT_MEALS.splice(mealTypeIndex, 1);
    }
    return CHEAT_MEALS;
}

export const updateCheatMeal = async (mealIdToUpdate, updatedCheatMealInput) => {
    console.log("Update meal type service called", updatedCheatMealInput);
    const { mealId, consumedTime, weight } = updatedCheatMealInput;

    const { imageUrl, title } = await getMealType(mealId);

    const mealTypeIndex = CHEAT_MEALS.findIndex(
        (meal) => meal.entryId === mealIdToUpdate,
    );

    if (mealTypeIndex !== -1) {
        CHEAT_MEALS[mealTypeIndex] = {
            mealId,
            mealType: title,
            imageUrl,
            consumedTime: new Date(consumedTime),
            weight,
        };
    }
    return CHEAT_MEALS;
}