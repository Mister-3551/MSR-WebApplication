import axios from "axios";
import {
    validateBirthdate, validateCountry,
    validateEmail,
    validateFullName,
    validatePassword,
    validateUsername
} from "../../../auth/Validator";

export const signUp = (event, fullName, username, emailAddress, password, confirmPassword, birthdate, country, setFeedback, setModalOpen) => {
    event.preventDefault();

    const validationResult = validateInputs(fullName, username, emailAddress, password, confirmPassword, birthdate, country);

    if (validationResult === true) {
        axios({
            method: "post",
            url: process.env.REACT_APP_SIGN_UP,
            data: {
                fullName: fullName,
                username: username,
                emailAddress: emailAddress,
                password: password,
                confirmPassword: confirmPassword,
                birthdate: birthdate,
                country: country
            },
        }).then(response => response.data)
            .then((data) => {
                setFeedback(data);
                setModalOpen(true);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    } else {
        setFeedback(validationResult);
        setModalOpen(true);
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

    const usernameValidator = validateUsername(inputs[1]);
    if (usernameValidator !== true) {
        return usernameValidator;
    }

    const emailAddressValidator = validateEmail(inputs[2]);
    if (emailAddressValidator !== true) {
        return emailAddressValidator;
    }

    const passwordValidator = validatePassword(inputs[3], inputs[4]);
    if (passwordValidator !== true) {
        return passwordValidator;
    }

    const birthdateValidator = validateBirthdate(inputs[5]);
    if (birthdateValidator !== true) {
        return birthdateValidator;
    }

    const countryValidator = validateCountry(inputs[6]);
    if (countryValidator !== true) {
        return countryValidator;
    }
    return true;
}