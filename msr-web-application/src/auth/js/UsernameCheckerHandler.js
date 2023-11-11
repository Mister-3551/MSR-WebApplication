import axios from "axios";
import * as SignOutHandler from "../../components/user-auth/js/SignOutHandler";

export const username = (username, setUsernameExists, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_PROFILE_USERNAME_CHECKER,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                username: username
            }
        })
            .then(response => response.data)
            .then((data) => {
                setUsernameExists(data);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}