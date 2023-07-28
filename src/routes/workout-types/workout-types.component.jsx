import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
    WorkoutTypesContainer,
    WorkoutTypesHeader,
    HeaderBlock,
    TitleBlock,
    ButtonContainer,
    AddWorkoutTypeModalContainer
} from "./workout-types.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import WorkoutTypeItem from "../../components/admin-directory/workout-types/workout-type-item/workout-type-item.component";
import AddWorkoutTypeForm from "../../components/admin-directory/workout-types/add-workout-type-form/add-meal-type-form.component";
import { selectWorkoutTypes } from "../../store/workout-type/workout.selector";

const WorkoutTypes = () => {
    const workoutTypes = useSelector(selectWorkoutTypes);
    console.log("OO", workoutTypes);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const handleCancel = () => {
        toggleModal();
    }

    console.log("Workout Types in Main component", workoutTypes);

    return (
        <WorkoutTypesContainer>
            <TitleBlock> Workout Types</TitleBlock>
            <ButtonContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={toggleModal}>
                    Add Workout Type
                </Button>
            </ButtonContainer>
            <AddWorkoutTypeModalContainer isOpen={showModal} onRequestClose={toggleModal}>
                <AddWorkoutTypeForm handleCancel={handleCancel} />
            </AddWorkoutTypeModalContainer>
            <WorkoutTypesHeader>
                <HeaderBlock>
                    <span>Workout Type</span>
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
            </WorkoutTypesHeader>
            {workoutTypes.map((workoutType) => (
                <WorkoutTypeItem key={workoutType.id} workoutType={workoutType} />
            ))}
        </WorkoutTypesContainer>
    );
};
export default WorkoutTypes;
