import axios from "axios";
import {validateEmail, validateFullName} from "../../../auth/Validator";

export const contact = (event, fullName, emailAddress, subject, message, setFeedback, setContactOpen) => {
    event.preventDefault();

    const validationResult = validateInputs(fullName, emailAddress, subject, message);

    if (validationResult === null) {
        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT,
            data: {
                fullName: fullName,
                emailAddress: emailAddress,
                subject: subject,
                message: message
            },
        }).then(response => response.data)
            .then((data) => {
                setFeedback(data);
                setContactOpen(true)
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        setFeedback(validationResult);
        setContactOpen(true)
    }
}

const validateInputs = (...inputs) => {

    for (const input of inputs) {
        if (input.trim().length === 0) {
            return "Fields can not be empty";
        }
    }

    const fullNameValidator = validateFullName(inputs[0]);
    if (fullNameValidator !== true) {
        return fullNameValidator;
    }

    const emailAddressValidator = validateEmail(inputs[1]);
    if (emailAddressValidator !== true) {
        return emailAddressValidator;
    }
    return null;
}