import axios from "axios";
import * as SignOutHandler from "./SignOutHandler";

export const search = (username, setUsers, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_SEARCH,
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
