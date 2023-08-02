import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
    EditCheatMealFormModalContainer,
    ButtonsContainer,
    EditCheatMealFormContainer,
} from "./edit-cheat-meal-form.styles";

import FormInput from "../../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import Dropdown from "../../dropdown/dropdown.component";

import { selectMealTypes } from '../../../store/meal-type/meal-type.selector';
import { updateCheatMealAction } from '../../../store/cheat-meal/cheat-meal.action';

const EditCheatMealForm = ({ cheatMeal, handleCancel, handleEdit }) => {
    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState('');
    const mealTypes = useSelector(selectMealTypes)

    const [formState, setFormState] = useState({
        mealId: cheatMeal.mealId,
        consumedTime: cheatMeal.consumedTime,
        weight: cheatMeal.weight,
    });

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

        dispatch(await updateCheatMealAction(formState.entryId, formState));

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
