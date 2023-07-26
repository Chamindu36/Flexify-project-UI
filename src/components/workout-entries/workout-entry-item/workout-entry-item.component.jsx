import React, { useState, useContext } from "react";

import {
    ButtonContainer,
    BaseSpan,
    EditButton,
    RemoveButton,
    WorkoutEntryItemContainer,
    EditWorkoutEntryModalContainer,
    WorkoutEntryImageContainer,
} from "./workout-entry-item.styles";

import ConfirmationPopup from "../../confirmation-pop/confirmation-pop.component";
import EditWorkoutEntryForm from "../edit-workout-entry-form/edit-workout-entry-form.component";
import { WorkoutsContext } from "../../../contexts/workouts.context";

const WorkoutEntry = ({ workout }) => {
    const { entryId, workoutTitle, imageUrl, consumedTime, weight } = workout;
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const { deleteWorkoutEntry } = useContext(WorkoutsContext);

    const removeWorkoutItem = () => {
        setShowConfirmationPopup(true);
    };

    const handleRemoveConfirm = async () => {
        setShowConfirmationPopup(false);

        // pass the meal type title to the deleteMealType functions
        await deleteWorkoutEntry(workout.entryId);
    };

    const updateWorkoutItem = async () => {
        setShowEditModal(true);
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
    };

    const handleEditWorkoutEntry = (formData) => {
        setShowEditModal(false);
    };

    return (
        <WorkoutEntryItemContainer key={entryId}>
            <WorkoutEntryImageContainer>
                <img src={imageUrl} alt={`${workoutTitle}`} />
            </WorkoutEntryImageContainer>
            <BaseSpan> {workoutTitle} </BaseSpan>
            <BaseSpan> {consumedTime.toDateString()} </BaseSpan>
            <BaseSpan> {weight} </BaseSpan>
            <ButtonContainer>
                <EditButton onClick={updateWorkoutItem}>
                    &#10000;
                </EditButton>
            </ButtonContainer>
            <ButtonContainer>
                <RemoveButton onClick={removeWorkoutItem}>
                    &#10007;
                </RemoveButton>
            </ButtonContainer>
            <EditWorkoutEntryModalContainer
                isOpen={showEditModal}
                onRequestClose={handleCancelEdit}
                ariaHideApp={false}
            >
                <EditWorkoutEntryForm
                    workout={workout}
                    handleCancel={handleCancelEdit}
                    handleEdit={handleEditWorkoutEntry}
                />
            </EditWorkoutEntryModalContainer>

            <ConfirmationPopup
                isOpen={showConfirmationPopup}
                onCancel={() => setShowConfirmationPopup(false)}
                onConfirm={handleRemoveConfirm}
            />
        </WorkoutEntryItemContainer>
    )
};

export default WorkoutEntry;