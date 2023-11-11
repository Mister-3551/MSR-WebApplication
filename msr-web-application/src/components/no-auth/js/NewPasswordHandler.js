import axios from "axios";
import {validatePassword} from "../../../auth/Validator";
import * as TokenChecker from "../../../auth/TokenChecker";

export const check = (token, setFeedback, setModalOpen) => {
    TokenChecker.check(token, setFeedback, setModalOpen);
}

export const newPassword = (event, token, password, confirmPassword, setFeedback, setModalOpen) => {
    event.preventDefault();

    const validationResult = validateInputs(password, confirmPassword);

    if (validationResult === null) {
        axios({
            method: "post",
            url: process.env.REACT_APP_NEW_PASSWORD,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                password: password,
                confirmPassword: confirmPassword
            },
        }).then(response => response.data)
            .then((data) => {
                setFeedback(data);
                setModalOpen(true)
            })
            .catch(() => {
                console.clear();
                setFeedback("Invalid token or the token is already expired");
                setModalOpen(true);
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

    const emailAddressValidator = validatePassword(inputs[0], inputs[1]);
    if (emailAddressValidator !== true) {
        return emailAddressValidator;
    }
    return null;
}