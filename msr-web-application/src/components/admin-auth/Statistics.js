import {Bar, Line, Pie} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import * as StatisticsHandler from "./js/StatisticsHandler";

export default function Statistics() {

    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [chartData, setChartData] = useState([]);
    const [pieChart, setPieChart] = useState([]);
    const [barChart, setBarChart] = useState([]);
    const [lineChart, setLineChart] = useState([]);

    useEffect(() => {
        StatisticsHandler.chartStatistics(setPieChart, setBarChart, setLineChart, navigate, signOut);
    }, [navigate, signOut]);

    const pieChartData = {
        labels: pieChart.labels === undefined ? "" : pieChart.labels,
        datasets: pieChart.datasets === undefined ? [] : pieChart.datasets
    };

    const barChartData = {
        labels: barChart.labels === undefined ? "" : barChart.labels,
        datasets: barChart.datasets === undefined ? [] : barChart.datasets
    };

    const lineChartData = {
        labels: lineChart.labels === undefined ? "" : lineChart.labels,
        datasets: lineChart.datasets === undefined ? [] : lineChart.datasets
    };

    return (
        <section id="admin-statistics" className="admin-statistics mt-5 container">
            <div className={"row"}>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                    <div className="card admin-statistics-card">
                        <div className="card-body">
                            <h5 className="text-center">Weapon Statistics</h5>
                            <div className="text-center">
                                <Pie data={pieChartData} options={pieChart.options} className={"canvas"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                    <div className="card admin-statistics-card">
                        <div className="card-body">
                            <h5 className="text-center">Play Time Statistics</h5>
                            <div className="text-center">
                                <Bar data={barChartData} options={barChart.options} className={"canvas"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                    <div className="card admin-statistics-card">
                        <div className="card-body">
                            <h5 className="text-center">Successful Missions</h5>
                            <div className="text-center">
                                <Line data={lineChartData} options={lineChart.options} className={"canvas"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}