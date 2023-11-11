import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";

export const admin = (setAdmin, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_ADMIN_HOME,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => response.data)
            .then((data) => {
                setAdmin(data);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    } else {

    }
}