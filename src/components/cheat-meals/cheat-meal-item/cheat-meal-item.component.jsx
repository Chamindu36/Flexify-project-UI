import React, { useState, useContext } from "react";

import {
    ButtonContainer,
    BaseSpan,
    EditButton,
    RemoveButton,
    CheatMealImageContainer,
    EditCheatMealModalContainer,
    CheatMealeItemContainer,
} from "./cheat-meal-item.styles";

import ConfirmationPopup from "../../confirmation-pop/confirmation-pop.component";
import EditCheatMealForm from "../edit-cheat-meal-form/edit-cheat-meal-form.component";
import { CheatMealsContext } from "../../../contexts/cheat-meals.context";

const CheatMealItem = ({ cheatMeal }) => {
    const { entryId, mealType, imageUrl, consumedTime, weight } = cheatMeal;
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const { deleteCheatMeal } = useContext(CheatMealsContext);

    const removeMealItem = () => {
        console.log('removeMealItem Clicked');
        setShowConfirmationPopup(true);
    };

    const handleRemoveConfirm = async () => {
        console.log('remove Cheat meal Item Confirmed');
        setShowConfirmationPopup(false);

        // pass the meal type title to the deleteMealType functions
        await deleteCheatMeal(cheatMeal.entryId);
    };

    const updateMealItem = async () => {
        console.log('update Cheat meal Item Clicked');
        setShowEditModal(true);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
    };

    const handleEditCheatMealEntry = (formData) => {
        console.log("Edited Cheat meal data:", formData);
        setShowEditModal(false);
    };

    return (
        <CheatMealeItemContainer key={entryId}>
            <CheatMealImageContainer>
                <img src={imageUrl} alt={`${mealType}`} />
            </CheatMealImageContainer>
            <BaseSpan> {mealType} </BaseSpan>
            <BaseSpan> {consumedTime.toDateString()} </BaseSpan>
            <BaseSpan> {weight} </BaseSpan>
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
            <EditCheatMealModalContainer
                isOpen={showEditModal}
                onRequestClose={handleCancelEdit}
                ariaHideApp={false}
            >
                <EditCheatMealForm
                    cheatMeal={cheatMeal}
                    handleCancel={handleCancelEdit}
                    handleEdit={handleEditCheatMealEntry}
                />
            </EditCheatMealModalContainer>

            <ConfirmationPopup
                isOpen={showConfirmationPopup}
                onCancel={() => setShowConfirmationPopup(false)}
                onConfirm={handleRemoveConfirm}
            />
        </CheatMealeItemContainer>
    )
};

export default CheatMealItem;