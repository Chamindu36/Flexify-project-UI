import React, { useState, useContext } from "react";

import {
    EditMealTypeFormContainer,
    ButtonsContainer,
    EditMealTypeFormModalContainer
} from "./edit-meal-type-form.styles";
import FormInput from "../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { MealTypesContext } from "../../contexts/meal-types.context";


const EditMealTypeForm = ({ mealType, handleCancel, handleEdit }) => {

    const [formState, setFormState] = useState({
        title: mealType.title,
        imageUrl: mealType.imageUrl,
        description: mealType.description,
        calories: mealType.calories,
    });

    const { updateMealType } = useContext(MealTypesContext);

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

        await updateMealType(formState.title, formState);

        handleCancelClick();// Pass the edited form data to the parent component
    };



    return (
        <EditMealTypeFormModalContainer
            isOpen={true} // Set to true to always show the modal
            onRequestClose={handleCancelClick}
            ariaHideApp={false} // Prevent app from being hidden when modal is open
        >
            <EditMealTypeFormContainer>
                <h2>Edit Meal Type</h2>
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
                        label="Description"
                        type="text"
                        required
                        onChange={handleChange}
                        name="description"
                        value={formState.description}
                    />

                    <FormInput
                        label="Image Link"
                        type="url"
                        required
                        onChange={handleChange}
                        name="imageUrl"
                        value={formState.imageUrl}
                    />

                    <FormInput
                        label="Calories per 1KG"
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
            </EditMealTypeFormContainer>
        </EditMealTypeFormModalContainer>
    );
};

export default EditMealTypeForm;
