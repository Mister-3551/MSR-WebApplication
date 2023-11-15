import axios from "axios";
import * as SignOutHandler from "../../user-auth/js/SignOutHandler";

export const chartStatistics = (setPieChart, setBarChart, setLineChart, navigate, signOut) => {

    const token = localStorage.getItem("token");

    if (token) {
        axios({
            method: "post",
            url: process.env.REACT_APP_ADMIN_STATISTICS,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => response.data)
            .then((data) => {
                setPieChart(data.pieChart);
                setBarChart(data.barChart);
                setLineChart(data.lineChart);
            })
            .catch((error) => {
                console.clear();
                SignOutHandler.signOut(null, navigate, signOut);
            });
    }
}