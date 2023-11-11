import * as MissionsHandler from "./js/MissionsHandler";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";

export default function Missions() {

    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [missions, setMissions] = useState([]);

    useEffect(() => {
        MissionsHandler.missions(setMissions, navigate, signOut);
    }, [navigate, signOut]);

    return(
        <section id={"missions"} className={"container missions align-items-center mt-5 p-3 p-md-4"}>
            <div className={"row"}>
                {
                    missions.map((mission, id) =>
                        <div key={id} className={"col-lg-4 col-md-6 col-sm-12 mb-4"}>
                            <div className={"card missions-card"}>
                                <img src={process.env.REACT_APP_IMAGES_MISSIONS + mission.image} alt={mission.name} className={"image"}/>
                                <div className={"card-body"}>
                                    <h5 className={"card-title"}>{mission.name}</h5>
                                    <p>{mission.description}</p>
                                    <div className={"text-center"}>
                                        {
                                            mission.completed === 1 || mission.completed === 2 ?
                                                <Link to={"/u/missions/" + mission.name.toLowerCase().replaceAll(" ", "_")} className={"button"}>Statistics</Link> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}