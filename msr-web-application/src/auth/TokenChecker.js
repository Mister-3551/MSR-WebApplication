import axios from "axios";

export const check = (token, setFeedback, setModalOpen) => {

    axios({
        method: "post",
        url: process.env.REACT_APP_TOKEN_CHECKER,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(response => response.data)
        .then((data) => {
        })
        .catch(() => {
            console.clear();
            setFeedback("Invalid token or the token is already expired");
            setModalOpen(true);
        });
}