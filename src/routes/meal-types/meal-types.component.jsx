import React, { useContext, useState } from "react";
import { MealTypesContext } from "../../contexts/meal-types.context";

import {
    MealTypesContainer,
    MealTypesHeader,
    HeaderBlock,
    TitleBlock,
    ButtonContainer,
    AddMealTypeModalContainer
} from "./meal-types.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import AddMealTypeForm from "../../components/admin-directory/meal-types/add-meal-type-form/add-meal-type-form.component";
import MealTypeItem from "../../components/admin-directory/meal-types/meal-type-item/meal-type-item.component";

const MealTypes = () => {
    const { mealTypes } = useContext(MealTypesContext);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCancel = () => {
        toggleModal();
    }

    console.log("Meal Types in Main component", mealTypes);

    return (
        <MealTypesContainer>
            <TitleBlock> Cheat Meal Types</TitleBlock>
            <ButtonContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={toggleModal}>
                    Add Meal Type
                </Button>
            </ButtonContainer>
            <AddMealTypeModalContainer isOpen={showModal} onRequestClose={toggleModal}>
                <AddMealTypeForm handleCancel={handleCancel} />
            </AddMealTypeModalContainer>
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
};

export default MealTypes;
