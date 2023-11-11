import axios from "axios";

export const signOut = (event, navigate, signOut) => {

    if (event !== null) {
        event.preventDefault();
    }

    axios({
        method: "post",
        url: process.env.REACT_APP_SIGN_OUT
    }).then(response => response.data)
        .then((data) => {
            if (data === "/sign-in") {
                signOut();
                navigate("/sign-in");
            }
        })
        .catch((error) => {
            console.log(error);
        });
}