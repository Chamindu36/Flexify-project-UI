import { BaseButton, GoogleSignInButton, InvertedButton, CancelButton } from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
    cancel: "cancel",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
        return InvertedButton;
    } else if (buttonType === BUTTON_TYPE_CLASSES.cancel) {
        return CancelButton;
    }
    else if (buttonType === BUTTON_TYPE_CLASSES.google) {
        return GoogleSignInButton;
    } else {
        return BaseButton;
    }
};


const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton
            {...otherProps}
        >
            {children}
        </CustomButton>
    );
};
export default Button;
