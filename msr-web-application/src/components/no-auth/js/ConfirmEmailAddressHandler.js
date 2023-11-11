import * as TokenChecker from "../../../auth/TokenChecker";
import axios from "axios";

export const check = (token, setFeedback, setModalOpen) => {
    TokenChecker.check(token, setFeedback, setModalOpen);
}

export const confirm = (event, token, setFeedback, setModalOpen) => {
    event.preventDefault();

    axios({
        method: "post",
        url: process.env.REACT_APP_CONFIRM,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            token: token
        }
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
}