import { WorkoutsContext } from "../../../contexts/workouts.context";
import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import Dropdown from "../../dropdown/dropdown.component";
import FormInput from "../../form-input/form-input.components";

import {
    AddWorkoutEntryFormContainer,
    ButtonsContainer,
} from "./add-workout-entry-form.styles";
import { selectWorkoutTypes } from "../../../store/workout-type/workout.selector";
const { useState, useContext } = require("react");

const defaultFormState = {
    workoutId: "",
    consumedTime: "",
    weight: "",
};

const AddWorkoutEntryForm = ({ handleCancel }) => {

    const [formState, setFormState] = useState(defaultFormState);
    const [selectedOption, setSelectedOption] = useState('');
    const { addWorkoutEntry } = useContext(WorkoutsContext);
    const { consumedTime, weight } = formState;
    const workoutTypes = useSelector(selectWorkoutTypes);

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

        await addWorkoutEntry(formState);

        handleCancelClick();
    };

    const handleDropdownChange = async (event) => {
        setSelectedOption(event.target.value);
        setFormState({ ...formState, workoutId: event.target.value });
    };

    const workoutOptions = workoutTypes.map((workoutType) => ({
        label: workoutType.title,
        value: workoutType.id,
    }));

    return (
        <AddWorkoutEntryFormContainer>
            <h2>Add New workout Entry</h2>
            <form onSubmit={handleSubmit}>

                <Dropdown
                    label="Workout Type"
                    options={workoutOptions}
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

        </AddWorkoutEntryFormContainer>
    );
};

export default AddWorkoutEntryForm;