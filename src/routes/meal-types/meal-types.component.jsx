import { useContext } from "react";

import { MealTypesContext } from "../../contexts/meal-types.context";
import { MealTypesContainer, MealTypesHeader, HeaderBlock, ButtonContainer } from "./meal-types.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import MealTypeItem from "../../components/meal-type-item/meal-type-item.component";

const MealTypes = () => {
    const { mealTypes } = useContext(MealTypesContext);

    const addMealTypesHeader = () => {
        console.log('addMealTypesHeader Clicked');
    };

    return (
        <MealTypesContainer>
            <ButtonContainer>
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.base}
                    onClick={addMealTypesHeader}>Add Meal Type</Button>
            </ButtonContainer>
            <MealTypesHeader>
                <HeaderBlock>
                    <span>Meal Type</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Calories per 1KG</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Update</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </MealTypesHeader>
            {mealTypes.map((mealType) => (
                <MealTypeItem key={mealType.id} mealType={mealType} />
            ))}
        </MealTypesContainer>
    );
}

export default MealTypes;