import React, { useState, useContext } from "react";

import {
    ButtonContainer,
    BaseSpan,
    EditButton,
    WorkoutTypeImageContainer,
    WorkoutTypeItemContainer,
    RemoveButton,
    EditWorkoutTypeModalContainer,
} from "./workout-type-item.styles";

import { WorkoutTypesContext } from "../../../../contexts/workout-types.context";
import ConfirmationPopup from "../../../confirmation-pop/confirmation-pop.component";
import EditWorkoutTypeForm from "../edit-workout-type-form/edit-workout-type-form.component";

const WorkOutTypeItem = ({ workoutType }) => {
    const { id, title, description, imageUrl, calories } = workoutType;
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const { deleteWorkoutType } = useContext(WorkoutTypesContext);

    const removeWorkoutItem = () => {
        console.log('removeWorkoutItem Clicked');
        setShowConfirmationPopup(true);
    }

    const handleRemoveConfirm = async () => {
        console.log('removeWorkoutItem Confirmed');
        setShowConfirmationPopup(false);

        // pass the workout type title to the deleteWorkoutType functions
        await deleteWorkoutType(workoutType.title);
    };

    const updateWorkoutItem = async () => {
        console.log('updateWorkoutItem Clicked');
        setShowEditModal(true);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
    };

    const handleEditWorkoutType = (formData) => {
        console.log("Edited workout type data:", formData);
        setShowEditModal(false);
    }

    return (
        <WorkoutTypeItemContainer key={id}>
            <WorkoutTypeImageContainer>
                <img src={imageUrl} alt={`${title}`} />
                <BaseSpan> {title} </BaseSpan>
            </WorkoutTypeImageContainer>
            <BaseSpan> {description} </BaseSpan>
            <BaseSpan> {calories} </BaseSpan>
            <ButtonContainer>
                <EditButton onClick={updateWorkoutItem}>
                    &#10000;
                </EditButton>
            </ButtonContainer>
            <ButtonContainer>
                <RemoveButton onClick={removeWorkoutItem}>
                    &#10006;
                </RemoveButton>
            </ButtonContainer>
            <EditWorkoutTypeModalContainer
                isOpen={showEditModal}
                onRequestClose={handleCancelEdit}
                ariaHideApp={false}
            >
                <EditWorkoutTypeForm
                    workoutType={workoutType}
                    handleCancel={handleCancelEdit}
                    handleEdit={handleEditWorkoutType}
                />
            </EditWorkoutTypeModalContainer>

            <ConfirmationPopup
                isOpen={showConfirmationPopup}
                onCancel={() => setShowConfirmationPopup(false)}
                onConfirm={handleRemoveConfirm}
            />

        </WorkoutTypeItemContainer>
    )
}

export default WorkOutTypeItem;
