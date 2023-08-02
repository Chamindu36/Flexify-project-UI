import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
    ButtonContainer,
    BaseSpan,
    EditButton,
    RemoveButton,
    CheatMealImageContainer,
    EditCheatMealModalContainer,
    CheatMealItemContainer,
} from "./cheat-meal-item.styles";

import ConfirmationPopup from "../../confirmation-pop/confirmation-pop.component";
import EditCheatMealForm from "../edit-cheat-meal-form/edit-cheat-meal-form.component";

import { deleteCheatMealAction } from '../../../store/cheat-meal/cheat-meal.action';

const CheatMealItem = ({ cheatMeal }) => {
    const dispatch = useDispatch();

    const { entryId, mealType, imageUrl, consumedTime, weight } = cheatMeal;
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

    const removeMealItem = () => {
        setShowConfirmationPopup(true);
    };

    const handleRemoveConfirm = async () => {
        setShowConfirmationPopup(false);

        // pass the meal type title to the deleteMealType functions
        dispatch(await deleteCheatMealAction(cheatMeal.entryId));
    };

    const updateMealItem = async () => {
        setShowEditModal(true);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
    };

    const handleEditCheatMealEntry = (formData) => {
        setShowEditModal(false);
    };

    return (
        <CheatMealItemContainer key={entryId}>
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
        </CheatMealItemContainer>
    )
};

export default CheatMealItem;