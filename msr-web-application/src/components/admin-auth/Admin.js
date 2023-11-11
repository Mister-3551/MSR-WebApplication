import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as AdminHandler from "./js/AdminHandler";
import {useAuth} from "../../auth/AuthProvider";

export default function Admin() {

    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        AdminHandler.admin(setAdmin, navigate, signOut);
    }, [navigate, signOut]);

    return(
        <section id={"admin"} className={"admin mt-5"}>
            <div className={"container mt-2"}>
                <div className={"row"}>
                    <div className={"col-xl-12 col-12 d-flex justify-content-center align-items-center files"}>
                        <div className={"row col-12"}>
                            <div className={"col-md-3 mb-3"}>
                                <div
                                    className={"member d-flex flex-column justify-content-center align-items-center"}>
                                    <img
                                        src={process.env.REACT_APP_IMAGES_OTHER + admin.statisticsImage}
                                        alt={"profile image1"} className={"image"}/>
                                    <span>Statistics</span>
                                    <span>Total users: {admin.totalUsers}</span>
                                    <Link to={"statistics"}>View</Link>
                                </div>
                            </div>
                            <div className={"col-md-3 mb-3"}>
                                <div
                                    className={"member d-flex flex-column justify-content-center align-items-center"}>
                                    <img
                                        src={process.env.REACT_APP_IMAGES_OTHER + admin.missionsImage}
                                        alt={"profile image2"} className={"image"}/>
                                    <span>Missions</span>
                                    <span>Total: {admin.missions}</span>
                                    <Link to={"missions"}>Add mission</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}