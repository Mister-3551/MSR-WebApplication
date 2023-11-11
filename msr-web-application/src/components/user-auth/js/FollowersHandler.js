import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";

export const followers = (username, setUsers, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_PROFILE_FOLLOWERS,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                username: username
            }
        }).then(response => response.data)
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}

export const following = (username, setUsers, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_PROFILE_FOLLOWING,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                username: username
            }
        }).then(response => response.data)
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}