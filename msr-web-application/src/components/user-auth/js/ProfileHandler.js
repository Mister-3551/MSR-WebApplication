import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";
import jwt_decode from "jwt-decode";

export const profile = (username, setProfile, setButtonText, setNewFollower, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_PROFILE,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                username: username,
                username1: decodeToken(token).user.username
            }
        }).then(response => response.data)
            .then((data) => {
                setProfile(data);
                setButtonText(data.followed ? "Following" : "Follow");
                setNewFollower(data.followers)
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}

export const follow = (username, setButtonText, newFollower, setNewFollower, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_PROFILE_FOLLOW,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                username: username
            }
        }).then(response => response.data)
            .then((data) => {
                setButtonText(data ? "Following" : "Follow");
                setNewFollower(data ? newFollower += 1 : newFollower -= 1);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}


export const secondsToTime = (seconds) => {
    return Math.floor(seconds / 3600) + "h " + Math.floor((seconds % 3600) / 60) + "m";
}

export const decodeToken = (token) => {
    return token !== null ? jwt_decode(token) : null;
}