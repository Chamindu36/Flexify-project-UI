import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
    EditWorkoutTypeFormContainer,
    ButtonsContainer,
    EditWorkoutTypeFormModalContainer
} from "./edit-workout-type-form.styles";
import FormInput from "../../../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES } from "../../../button/button.component";
import { updateWorkoutTypeAction } from "../../../../store/workout-type/workout-type.action";


const EditWorkoutTypeForm = ({ workoutType, handleCancel, handleEdit }) => {
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        id: workoutType.id,
        title: workoutType.title,
        imageUrl: workoutType.imageUrl,
        description: workoutType.description,
        calories: workoutType.calories,
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleCancelClick = () => {
        handleCancel();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        handleEdit(formState);

        dispatch(await updateWorkoutTypeAction(formState.id, formState));

        handleCancelClick();// Pass the edited form data to the parent component
    };

    return (
        <EditWorkoutTypeFormModalContainer
            isOpen={true} // Set to true to always show the modal
            onRequestClose={handleCancelClick}
            ariaHideApp={false} // Prevent app from being hidden when modal is open
        >
            <EditWorkoutTypeFormContainer>
                <h2>Edit Workout Type</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Title"
                        type="text"
                        required
                        onChange={handleChange}
                        name="title"
                        value={formState.title}
                    />

                    <FormInput
                        label="Workout Category"
                        type="text"
                        required
                        onChange={handleChange}
                        name="description"
                        value={formState.description}
                    />

                    <FormInput
                        label="Image URL"
                        type="text"
                        required
                        onChange={handleChange}
                        name="imageUrl"
                        value={formState.imageUrl}
                    />

                    <FormInput
                        label="Calories burnt per 30 min or 8 reps"
                        type="number"
                        required
                        onChange={handleChange}
                        name="calories"
                        value={formState.calories}
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
            </EditWorkoutTypeFormContainer>
        </EditWorkoutTypeFormModalContainer>

    );
};

export default EditWorkoutTypeForm;