import React, { useContext, useState } from "react";

import {
    WorkoutEntriesContainer,
    WorkoutEntriesHeader,
    HeaderBlock,
    TitleBlock,
    ButtonContainer,
    AddWorkoutEntriesModalContainer,
} from "./workouts.styles"

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { WorkoutsContext } from "../../contexts/workouts.context";
import WorkoutEntry from "../../components/workout-entries/workout-entry-item/workout-entry-item.component";
import AddWorkoutEntryForm from "../../components/workout-entries/add-workout-entry-form/add-workout-entry-form";

const WorkoutEntries = () => {
    const { workoutEntries } = useContext(WorkoutsContext);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCancel = () => {
        toggleModal();
    };

    console.log("Workout Entries component", workoutEntries);

    return (
        <WorkoutEntriesContainer>
            <TitleBlock> Workout Entries </TitleBlock>
            <ButtonContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={toggleModal}>
                    Add Workout Entry
                </Button>
            </ButtonContainer>
            <AddWorkoutEntriesModalContainer isOpen={showModal} onRequestClose={toggleModal}>
                <AddWorkoutEntryForm handleCancel={handleCancel} />
            </AddWorkoutEntriesModalContainer>
            <WorkoutEntriesHeader>
                <HeaderBlock>
                    <span></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Workout Type</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Consumed Time</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Weight</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Change</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </WorkoutEntriesHeader>
            {workoutEntries.map((workout) => (
                <WorkoutEntry key={workout.entryId} workout={workout} />
            ))}
        </WorkoutEntriesContainer>
    );

}

export default WorkoutEntries;