import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";

export const weapons = (username, setWeapons, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_PROFILE_WEAPONS,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                username: username
            }
        }).then(response => response.data)
            .then((data) => {
                setWeapons(data);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}