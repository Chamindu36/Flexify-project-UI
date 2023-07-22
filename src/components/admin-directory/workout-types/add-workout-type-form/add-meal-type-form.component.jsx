import Button from "../../../button/button.component";
import FormInput from "../../../form-input/form-input.components";
import { BUTTON_TYPE_CLASSES } from "../../../button/button.component";

import { AddWorkoutTypeFormContainer, ButtonsContainer } from "./add-workout-type-form.styles";
import { WorkoutTypesContext } from "../../../../contexts/workout-types.context";
const { useState, useContext } = require("react");

const defaultFormState = {
    title: "",
    imageUrl: "",
    description: "",
    calories: "",
};

const AddWorkoutTypeForm = ({ handleCancel }) => {

    const [formState, setFormState] = useState(defaultFormState);
    const { addWorkoutType } = useContext(WorkoutTypesContext);
    const { title, imageUrl, description, calories } = formState;

    const resetFormFields = () => {
        setFormState(defaultFormState);
    }

    const handleCancelClick = () => {
        resetFormFields();
        handleCancel();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        // set only the updated values from the form
        setFormState({ ...formState, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("handleSubmit Clicked");

        await addWorkoutType(formState);

        handleCancelClick();
    }

    return (
        <AddWorkoutTypeFormContainer>
            <h2>Add New Workout Type to the System</h2>
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
                    label="Calroies burnt per 30 mins/8 reps"
                    type="number"
                    required
                    onChange={handleChange}
                    name="calories"
                    value={calories} />
                <ButtonsContainer>
                    <Button type="submit" onSubmit={handleSubmit}> Add Item </Button>
                    <Button type="cancel" onClick={handleCancelClick} buttonType={BUTTON_TYPE_CLASSES.cancel} > Cancel </Button>
                </ButtonsContainer>
            </form>
        </AddWorkoutTypeFormContainer>
    )
}

export default AddWorkoutTypeForm;