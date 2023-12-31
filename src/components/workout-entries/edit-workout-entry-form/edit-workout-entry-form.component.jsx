import React, { useState, useContext } from "react";
import { useSelector } from 'react-redux';

import {
    EditWorkoutEntryFormContainer,
    ButtonsContainer,
    EditWorkoutEntryFormModalContainer,
} from "./edit-workout-entry-form.styles";

import FormInput from "../../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import Dropdown from "../../dropdown/dropdown.component";
import { WorkoutsContext } from "../../../contexts/workouts.context";
import { selectWorkoutTypes } from "../../../store/workout-type/workout.selector";

const EditWorkoutEntryForm = ({ workout, handleCancel, handleEdit }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const workoutTypes = useSelector(selectWorkoutTypes);

    const [formState, setFormState] = useState({
        entryId: workout.entryId,
        workoutId: workout.workoutId,
        consumedTime: workout.consumedTime,
        weight: workout.weight,
    });

    const { updateWorkoutEntry } = useContext(WorkoutsContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleCancelClick = () => {
        handleCancel();
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
        setFormState({ ...formState, workoutId: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        handleEdit(formState);

        await updateWorkoutEntry(formState.entryId, formState);

        handleCancelClick();// Pass the edited form data to the parent component
    };


    const workoutOptions = workoutTypes.map((workoutType) => ({
        label: workoutType.title,
        value: workoutType.id,
    }));

    return (
        <EditWorkoutEntryFormModalContainer
            isOpen={true} // Set to true to always show the modal
            onRequestClose={handleCancelClick}
            ariaHideApp={false} // Prevent app from being hidden when modal is open
        >
            <EditWorkoutEntryFormContainer>
                <h2>Edit Workout Entry</h2>
                <form onSubmit={handleSubmit}>
                    <Dropdown
                        label="Workout Type"
                        options={workoutOptions}
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        currentVal={workout.workoutTitle}
                    />

                    <FormInput
                        label="Consumed Time"
                        type="date"
                        required
                        onChange={handleChange}
                        name="consumedTime"
                        value={formState.consumedTime.toString('yyyy-MM-dd')}
                    />

                    <FormInput
                        label="Weight"
                        type="number"
                        required
                        onChange={handleChange}
                        name="weight"
                        value={formState.weight}
                    />

                    <ButtonsContainer>
                        <Button type="submit">Save Changes</Button>
                        <Button
                            type="cancel"
                            onClick={handleCancelClick}
                            buttonType={BUTTON_TYPE_CLASSES.cancel}
                        >
                            Cancel
                        </Button>
                    </ButtonsContainer>
                </form>
            </EditWorkoutEntryFormContainer>
        </EditWorkoutEntryFormModalContainer>
    );
};

export default EditWorkoutEntryForm;
