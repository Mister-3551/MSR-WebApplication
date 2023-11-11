import axios from "axios";
import * as SignOutHandler from "./SignOutHandler";
import {validateFullName, validateImage} from "../../../auth/Validator";

export const account = (setAccount, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_ACCOUNT,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => response.data)
            .then((data) => {
                setAccount((prevAccount) => ({...prevAccount, fullName: data.fullName }))
                setAccount((prevAccount) => ({...prevAccount, username: data.username }))
                setAccount((prevAccount) => ({...prevAccount, emailAddress: data.emailAddress }))
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}

export const update = (event, account, navigate, signOut, setFeedback, setModalOpen) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const validationResult = validateInputs(account);

    if (token && validationResult === true) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_ACCOUNT_UPDATE,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
            data: {
                image: account.profileImage,
                fullName: account.fullName
            }
        }).then(response => response.data)
            .then((data) => {
                data ? setFeedback("Account updated") : setFeedback("Something went wrong");
                setModalOpen(true);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
    setFeedback(validationResult);
    setModalOpen(true);
}

const validateInputs = (account) => {

    const imageValidator = validateImage(account.profileImage);
    if (imageValidator !== true) {
        return imageValidator;
    }

    const fullNameValidator = validateFullName(account.fullName);
    if (fullNameValidator !== true) {
        return fullNameValidator;
    }
    return true;
}