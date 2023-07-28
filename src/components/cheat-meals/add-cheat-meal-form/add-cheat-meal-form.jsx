import { CheatMealsContext } from "../../../contexts/cheat-meals.context";
import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import Dropdown from "../../dropdown/dropdown.component";
import FormInput from "../../form-input/form-input.components";
import { selectMealTypes } from '../../../store/meal-type/meal-type.selector';

import {
    AddCheatMealFormContainer,
    ButtonsContainer,
} from "./add-cheat-meal-form.styles";
const { useState, useContext } = require("react");

const defaultFormState = {
    mealId: "",
    consumedTime: "",
    weight: "",
};

const AddCheatMealEntryForm = ({ handleCancel }) => {

    const [formState, setFormState] = useState(defaultFormState);
    const [selectedOption, setSelectedOption] = useState('');
    const { addCheatMeal } = useContext(CheatMealsContext);
    const { consumedTime, weight } = formState;

    const mealTypes = useSelector(selectMealTypes)

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        await addCheatMeal(formState);

        handleCancelClick();
    };

    const handleDropdownChange = async (event) => {
        setSelectedOption(event.target.value);
        setFormState({ ...formState, mealId: event.target.value });
    };

    const mealOptions = mealTypes.map((mealType) => ({
        label: mealType.title,
        value: mealType.id,
    }));


    return (
        <AddCheatMealFormContainer>
            <h2>Add New Cheat Meal Entry</h2>
            <form onSubmit={handleSubmit}>

                <Dropdown
                    label="Meal Type"
                    options={mealOptions}
                    value={selectedOption}
                    onChange={handleDropdownChange}
                />

                <FormInput
                    label="Consumed Time"
                    type="date"
                    required
                    onChange={handleChange}
                    name="consumedTime"
                    value={consumedTime}
                />

                <FormInput
                    label="Weight"
                    type="number"
                    required
                    onChange={handleChange}
                    name="weight"
                    value={weight}
                />

                <ButtonsContainer>
                    <Button type="submit" onSubmit={handleSubmit}> Add Item </Button>
                    <Button type="cancel" onClick={handleCancelClick} buttonType={BUTTON_TYPE_CLASSES.cancel} > Cancel </Button>
                </ButtonsContainer>
            </form>

        </AddCheatMealFormContainer>
    );
};

export default AddCheatMealEntryForm;