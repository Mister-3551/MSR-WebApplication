import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";
import {
    validateImage,
    validateMap, validateMissionPrice,
    validateMissionsDescription,
    validateMissionsName, validateMissionTime
} from "../../../auth/Validator";

export const add = (event, mission, navigate, signOut, setFeedback, setModalOpen) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const validationResult = validateInputs(mission);

    if (token && validationResult === true) {
        axios({
            method: "post",
            url: process.env.REACT_APP_ADMIN_ADD_MISSIONS,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
            data: {
                name: mission.name,
                description: mission.description,
                image: mission.missionImage,
                map: mission.missionMap,
                price: mission.price,
                bestTime: mission.bestTime,
                deadline: mission.deadline
            }
        }).then(response => response.data)
            .then((data) => {
                data ? setFeedback("Mission insert") : setFeedback("Something went wrong");
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

const validateInputs = (mission) => {

    const nameValidator = validateMissionsName(mission.name);
    if (nameValidator !== true) {
        return nameValidator;
    }

    const descriptionValidator = validateMissionsDescription(mission.description);
    if (descriptionValidator !== true) {
        return descriptionValidator;
    }

    const imageValidator = validateImage(mission.missionImage);
    if (imageValidator !== true) {
        return imageValidator;
    }

    const mapValidator = validateMap(mission.missionMap);
    if (mapValidator !== true) {
        return mapValidator;
    }

    const priceValidator = validateMissionPrice(mission.price);
    if (priceValidator !== true) {
        return priceValidator;
    }

    const bestTimeValidator = validateMissionTime(mission.bestTime);
    if (bestTimeValidator !== true) {
        return bestTimeValidator;
    }

    const deadlineValidator = validateMissionTime(mission.deadline);
    if (deadlineValidator !== true) {
        return deadlineValidator;
    }
    return true;
}