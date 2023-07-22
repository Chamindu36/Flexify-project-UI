import React from "react";
import {
    ConfirmationPopOverlay,
    ConfirmationPopContent,
    ButtonsContainer,
} from "./confirmation-pop.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ConfirmationPopup = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <ConfirmationPopOverlay>
            <ConfirmationPopContent>
                <h3>Are you sure you want to remove this item?</h3>
                <ButtonsContainer>
                    <Button type="submit" onClick={onConfirm}>Confirm</Button>
                    <Button
                        type="cancel"
                        onClick={onCancel}
                        buttonType={BUTTON_TYPE_CLASSES.cancel}
                    >
                        Cancel
                    </Button>
                </ButtonsContainer>
            </ConfirmationPopContent>
        </ConfirmationPopOverlay>
    );
};

export default ConfirmationPopup;
;