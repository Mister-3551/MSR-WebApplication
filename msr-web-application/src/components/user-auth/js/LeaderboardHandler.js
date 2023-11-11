import axios from "axios";
import * as SignOutHandler from "./SignOutHandler";

export const leaderboard = (setUsers, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_LEADERBOARD,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => response.data)
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.clear();
                console.log(error)
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}
