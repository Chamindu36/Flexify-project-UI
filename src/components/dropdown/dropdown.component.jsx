import React from 'react';
import FormInput from '../form-input/form-input.components';

const Dropdown = ({ label, options, onChange, ...otherProps }) => {

    const { currentVal } = otherProps;

    return (
        <FormInput label={label} {...otherProps} as="select" onChange={onChange}>
            <option value="" disabled>
                {currentVal ? currentVal : "Select an option"}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </FormInput>
    );
};

export default Dropdown;