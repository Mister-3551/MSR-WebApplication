export const validateFullName = (fullName) => {

    if (fullName.length < 3 || fullName.length > 30) {
        return "Full name must be between 3 and 30 characters long";
    }

    if (/\d+/.test(fullName)) {
        return "Full name must not contains numbers";
    }

    if (!/^[a-zA-ZčćđšžČĆĐŠŽ\s]+$/.test(fullName)) {
        return "The full name must include latin letter";
    }
    return true;
}

export const validateUsername = (username) => {

    if (username.length < 4 || username.length > 16) {
        return "Username must be between 4 and 16 characters long";
    }

    if (/[A-Z]/.test(username)) {
        return "Username must not contains uppercase letters";
    }

    if (/[!@#$%^&*()]/.test(username)) {
        return "Username must not contains special characters";
    }

    if (!/^[a-z0-9_-]+$/.test(username)) {
        return "Username contains illegal characters";
    }
    return true;
}

export const validateEmail = (emailAddress) => {

    if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailAddress)) {
        return "Invalid email address pattern";
    }
    return true;
}

export const validatePassword = (password, confirmPassword) => {

    if (password.length < 8 || password.length > 16) {
        return "Password must be between 8 and 16 characters long";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number";
    }

    if (!/[!@#$%^&*()]/.test(password)) {
        return "Password must contain at least one special character (!, @, #, $, %, ^, &, *, ())";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match";
    }
    return true;
}

export const validateBirthdate = (birthdate) => {

    if (birthdate === null) {
        return "Birthdate must not be null";
    }

    if (!/[0-9/]/.test(birthdate)) {
        return "Birthdate must not contains characters";
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
        return "Birthdate is in wrong format";
    }

    if (((new Date() - new Date(birthdate)) / (1000 * 60 * 60 * 24 * 365.25)) < 10) {
        return "User must be at least 10 years old";
    }
    return true;
}

export const validateCountry = (country) => {

    if (/[0-9]/.test(country)) {
        return "Country must not contains numbers";
    }

    if (!/^[a-zA-Z\s]+$/.test(country)) {
        return "Country must exists";
    }
    return true;
}

export const validateMissionsName = (name) => {

    if (name.length < 3 || name.length > 30) {
        return "Missions name must be between 3 and 30 characters long";
    }

    if (/\d+/.test(name)) {
        return "Missions name must not contains numbers";
    }

    if (!/^[a-zA-ZčćđšžČĆĐŠŽ\s]+$/.test(name)) {
        return "Missions name must include latin letter";
    }
    return true;
}

export const validateMissionsDescription = (description) => {

    if (description.length < 3 || description.length > 1000) {
        return "Description must be between 3 and 1000 characters long";
    }

    if (/\d+/.test(description)) {
        return "Description must not contains numbers";
    }

    if (!/^[a-zA-ZčćđšžČĆĐŠŽ\s]+$/.test(description)) {
        return "Description must include latin letter";
    }
    return true;
}

export const validateImage = (image) => {

    if (image === null) {
        return "Image must not be null";
    }

    if (image.size > 2097152) {
        return "Image size is more than 2 MB";
    }

    if (image.name.includes("..")) {
        return "Image contains invalid Characters";
    }
    return true;
}

export const validateMap = (map) => {

    if (map === null) {
        return "Map must not be null";
    }

    if (map.size > 2097152) {
        return "Map size is more than 2 MB";
    }

    if (map.name.includes("..")) {
        return "Map contains invalid Characters";
    }
    return true;
}

export const validateMissionPrice = (price) => {

    if (price.length === 0) {
        return "Price must not be null";
    }

    if (!/\d+/.test(price)) {
        return "Price must contains numbers";
    }
    return true;
}

export const validateMissionTime = (time) => {

    if (time.length === 0) {
        return "Time must not be null";
    }

    if (!/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(time)) {
        return "Time must be in right format";
    }
    return true;
}