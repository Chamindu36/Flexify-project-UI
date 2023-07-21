const MEAL_TYPES = [
    {
        id: 1,
        title: 'Pizza',
        imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        description: 'Pizza',
        calories: 300,
    },
    {
        id: 2,
        title: 'Burger',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Ham Burger',
        calories: 400,
    },
    {
        id: 3,
        title: 'Pasta',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Pasta Chicken',
        calories: 500,
    },
    {
        id: 4,
        title: 'Cheese Fries',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Cheese Fries',
        calories: 600,
    },
    {
        id: 5,
        title: 'Ice Cream',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        description: 'Ice Cream',
        calories: 50,
    },
]
const getLastMealTypeId = () => MEAL_TYPES[MEAL_TYPES.length - 1].id;

export const getMealTypes = async () => MEAL_TYPES;

export const getMealType = async (mealTypeTitle) =>
    MEAL_TYPES.find((mealType) => mealType.title.toLocaleLowerCase === mealTypeTitle);

export const addMealType = async (newMealTypeInput) => {
    const { title, imageUrl, description, calories } = newMealTypeInput;
    const id = getLastMealTypeId() + 1;

    const existingMealType = MEAL_TYPES.find(
        (mealType) => mealType.title.toLowerCase() === title.toLowerCase(),
    );

    if (existingMealType) {
        alert('Meal type already exists');
        return;
    } else {
        MEAL_TYPES.push({
            id,
            title,
            imageUrl,
            description,
            calories,
        });
    }
}

export const deleteMealType = async (mealTypeTitle) => {
    const mealTypeIndex = MEAL_TYPES.findIndex(
        (mealType) => mealType.title.toLowerCase() === mealTypeTitle.toLowerCase(),
    );

    if (mealTypeIndex !== -1) {
        MEAL_TYPES.splice(mealTypeIndex, 1);
    }
}

export const updateMealType = async (mealTypeTitle, updatedMealTypeInput) => {
    const { title, imageUrl, description, calories } = updatedMealTypeInput;

    const mealTypeIndex = MEAL_TYPES.findIndex(
        (mealType) => mealType.title.toLowerCase() === mealTypeTitle.toLowerCase(),
    );

    if (mealTypeIndex !== -1) {
        MEAL_TYPES[mealTypeIndex] = {
            title,
            imageUrl,
            description,
            calories,
        };
    }
}