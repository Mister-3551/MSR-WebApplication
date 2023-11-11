import axios from "axios";

export const signIn = (event, emailUsernameEmailAddress, password, setFeedback, setModalOpen, navigate, signIn) => {
    event.preventDefault();

    const validationResult = validateInputs(emailUsernameEmailAddress, password);

    if (validationResult == null) {
        axios({
            method: "post",
            url: process.env.REACT_APP_SIGN_IN,
            data: {
                usernameOrEmailAddress: emailUsernameEmailAddress.trim(),
                password: password
            },
        }).then(response => response.data)
            .then((data) => {
                let feedbackMessage;
                switch (data.trim()) {
                    case "Bad Credentials":
                        feedbackMessage = "Wrong given parameters";
                        break;
                    case "Email address is not confirmed":
                        feedbackMessage = "Email address is not confirmed";
                        break;
                    case "Account is Locked":
                        feedbackMessage = "Your account is locked";
                        break;
                    default:
                        feedbackMessage = "Sign in...";
                        saveToken(data);
                        navigate(signIn());
                        break;
                }
                setFeedback(feedbackMessage);
                setModalOpen(true);
            })
            .catch((error) => {
                console.log(error);
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
    return null;
}

const saveToken = (token) => {
    localStorage.setItem("token", token);
}