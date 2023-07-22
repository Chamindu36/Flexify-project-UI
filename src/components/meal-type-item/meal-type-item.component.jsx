import { useContext } from "react";
import { MealTypesContext } from "../../contexts/meal-types.context";
import {
    ButtonContainer,
    BaseSpan,
    EditButton,
    MealTypeImageContainer,
    MealTypeItemContainer,
    RemoveButton,
    Description,
    Value,
} from "./meal-type-item.styles";


const MealTypeItem = ({ mealType }) => {
    const { mealTypes, setMealTypes } = useContext(MealTypesContext);
    const { id, title, description, imageUrl, calories } = mealType;

    const removeMealItem = () => {
        console.log('removeMealItem Clicked');
    };

    const updateMealItem = () => {
        console.log('updateMealItem Clicked');
    };
    return (
        <MealTypeItemContainer>
            <MealTypeImageContainer>
                <img src={imageUrl} alt={`${title}`} />
            </MealTypeImageContainer>
            <BaseSpan> {description} </BaseSpan>
            <BaseSpan> {calories} </BaseSpan>
            <ButtonContainer>
                <EditButton onClick={updateMealItem}>
                    &#10000;
                </EditButton>
            </ButtonContainer>
            <ButtonContainer>
                <RemoveButton onClick={removeMealItem}>
                    &#10007;
                </RemoveButton>
            </ButtonContainer>
        </MealTypeItemContainer>
    )


};

export default MealTypeItem;