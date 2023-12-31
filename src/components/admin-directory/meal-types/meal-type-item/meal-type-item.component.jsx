import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
    ButtonContainer,
    BaseSpan,
    EditButton,
    MealTypeImageContainer,
    MealTypeItemContainer,
    RemoveButton,
    EditMealTypeModalContainer,
} from "./meal-type-item.styles";

import ConfirmationPopup from "../../../confirmation-pop/confirmation-pop.component";
import EditMealTypeForm from "../edit-meal-type-form/edit-meal-type-form.component";
import { deleteMealTypeAction } from "../../../../store/meal-type/meal-type.action";

const MealTypeItem = ({ mealType }) => {
    const dispatch = useDispatch();

    const { id, title, description, imageUrl, calories } = mealType;
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

    const removeMealItem = () => {
        console.log('removeMealItem Clicked');
        setShowConfirmationPopup(true);
    };

    const handleRemoveConfirm = async () => {
        console.log('removeMealItem Confirmed');
        setShowConfirmationPopup(false);

        // pass the meal type title to the deleteMealType functions
        dispatch(await deleteMealTypeAction(mealType.id));
    };

    const updateMealItem = async () => {
        console.log('updateMealItem Clicked');
        setShowEditModal(true);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
    };

    const handleEditMealType = (formData) => {
        console.log("Edited meal type data:", formData);
        setShowEditModal(false);
    };

    return (
        <MealTypeItemContainer key={id}>
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
            <EditMealTypeModalContainer
                isOpen={showEditModal}
                onRequestClose={handleCancelEdit}
                ariaHideApp={false}
            >
                <EditMealTypeForm
                    mealType={mealType}
                    handleCancel={handleCancelEdit}
                    handleEdit={handleEditMealType}
                />
            </EditMealTypeModalContainer>

            <ConfirmationPopup
                isOpen={showConfirmationPopup}
                onCancel={() => setShowConfirmationPopup(false)}
                onConfirm={handleRemoveConfirm}
            />
        </MealTypeItemContainer>
    )
};

export default MealTypeItem;