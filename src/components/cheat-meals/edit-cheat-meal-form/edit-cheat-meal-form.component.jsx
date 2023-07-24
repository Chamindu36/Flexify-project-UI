import React, { useState, useContext } from "react";

import {
    EditCheatMealFormModalContainer,
    ButtonsContainer,
    EditCheatMealFormContainer,
} from "./edit-cheat-meal-form.styles";

import FormInput from "../../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import { CheatMealsContext } from "../../../contexts/cheat-meals.context";
import Dropdown from "../../dropdown/dropdown.component";
import { MealTypesContext } from "../../../contexts/meal-types.context";

const EditCheatMealForm = ({ cheatMeal, handleCancel, handleEdit }) => {

    console.log("Edit CheatMealForm", cheatMeal);
    const [selectedOption, setSelectedOption] = useState('');
    const { mealTypes } = useContext(MealTypesContext);

    const [formState, setFormState] = useState({
        mealId: cheatMeal.mealId,
        consumedTime: cheatMeal.consumedTime,
        weight: cheatMeal.weight,
    });

    const { updateCheatMeal } = useContext(CheatMealsContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleCancelClick = () => {
        handleCancel();
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
        setFormState({ ...formState, mealId: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        handleEdit(formState);

        await updateCheatMeal(formState.entryId, formState);

        handleCancelClick();// Pass the edited form data to the parent component
    };


    const mealOptions = mealTypes.map((mealType) => ({
        label: mealType.title,
        value: mealType.id,
    }));

    return (
        <EditCheatMealFormModalContainer
            isOpen={true} // Set to true to always show the modal
            onRequestClose={handleCancelClick}
            ariaHideApp={false} // Prevent app from being hidden when modal is open
        >
            <EditCheatMealFormContainer>
                <h2>Edit Cheat Meal Entry</h2>
                <form onSubmit={handleSubmit}>
                    <Dropdown
                        label="Meal Type"
                        options={mealOptions}
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        currentVal={cheatMeal.mealType}
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
            </EditCheatMealFormContainer>
        </EditCheatMealFormModalContainer>
    );
};

export default EditCheatMealForm;
