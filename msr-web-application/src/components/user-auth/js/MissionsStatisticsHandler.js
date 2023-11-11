import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";

export const missionsStatisticsCheck = (name, navigate, signOut, setFeedback, setModalOpen) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_MISSIONS_STATISTICS_CHECK,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                name: name
            }
        }).then(response => response.data)
            .then((data) => {
                if (!data) {
                    setFeedback("Mission does not exists");
                    setModalOpen(true);
                }
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}

export const missionsStatistics = (setMissionsStatistics, name, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_USER_MISSIONS_STATISTICS,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                name: name
            }
        }).then(response => response.data)
            .then((data) => {
                setMissionsStatistics(data);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}