import Button from "../button/button.component";
import FormInput from "../form-input/form-input.components";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { AddMealTypeFormContainer, ButtonsContainer } from "./add-meal-type-form.styles";
const { useState } = require("react");

const defaultFormState = {
    title: "",
    imageUrl: "",
    description: "",
    calories: "",
};

const AddMealTypeForm = ({ handleCancel }) => {

    const [formState, setFormState] = useState(defaultFormState);
    const { title, imageUrl, description, calories } = formState;

    const resetFormFields = () => {
        setFormState(defaultFormState);
    }

    const handleCancelClick = () => {
        resetFormFields();
        handleCancel();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // set only the updated values from the form
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event) => {
        console.log("handleSubmit Clicked");
    };

    return (
        <AddMealTypeFormContainer>
            <h2>Add New Cheat Meal to the System</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Title"
                    type="text"
                    required
                    onChange={handleChange}
                    name="title"
                    value={title} />

                <FormInput
                    label="Description"
                    type="text"
                    required
                    onChange={handleChange}
                    name="description"
                    value={description} />

                <FormInput
                    label="Image Link"
                    type="url"
                    required
                    onChange={handleChange}
                    name="imageUrl"
                    value={imageUrl} />

                <FormInput
                    label="Calroies per 1KG"
                    type="number"
                    required
                    onChange={handleChange}
                    name="calories"
                    value={calories} />
                <ButtonsContainer>
                    <Button type="submit" > Add Item </Button>
                    <Button type="cancel" onClick={handleCancelClick} buttonType={BUTTON_TYPE_CLASSES.cancel} > Cancel </Button>
                </ButtonsContainer>

            </form>

        </AddMealTypeFormContainer>
    );
};

export default AddMealTypeForm;