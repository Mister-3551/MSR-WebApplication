import axios from "axios";
import {validateEmail} from "../../../auth/Validator";

export const reset = (event, emailAddress, setFeedback, setModalOpen) => {
    event.preventDefault();

    const validationResult = validateInputs(emailAddress);

    if (validationResult === null) {
        axios({
            method: "post",
            url: process.env.REACT_APP_RESET,
            data: {
                emailAddress: emailAddress,
            },
        }).then(response => response.data)
            .then((data) => {
                setFeedback(data);
                setModalOpen(true)
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        setFeedback(validationResult);
        setModalOpen(true)
    }
}

const validateInputs = (...inputs) => {

    for (const input of inputs) {
        if (input.trim().length === 0) {
            return "Fields can not be empty";
        }
    }

    const emailAddressValidator = validateEmail(inputs[0]);
    if (emailAddressValidator !== true) {
        return emailAddressValidator;
    }
    return null;
}