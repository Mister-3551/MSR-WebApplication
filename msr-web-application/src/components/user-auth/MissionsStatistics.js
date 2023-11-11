import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import * as MissionsStatisticsHandler from "./js/MissionsStatisticsHandler";
import {useAuth} from "../../auth/AuthProvider";
import {Popup} from "../pupop/Pupop";

export default function MissionsStatistics() {

    const {name} = useParams();

    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [error, setError] = useState("");
    const [missionStatistics, setMissionStatistics] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        MissionsStatisticsHandler.missionsStatisticsCheck(name, navigate, signOut, setError, setModalOpen);
        MissionsStatisticsHandler.missionsStatistics(setMissionStatistics, name, navigate, signOut);
    }, [name, navigate, signOut]);

    return(
        <>
            <section id={"missions-statistics"} className={"container missions-statistics align-items-center mt-5 p-3 p-md-4"}>
                {missionStatistics.length !== 0 ?
                    <div className={"row"}>
                        {
                            missionStatistics.map((mission, id) =>
                                <div key={id} className={"col-lg-4 col-md-6 col-sm-12 mb-4"}>
                                    <div className={"card missions-statistics-card"}>
                                        <div className={"card-body"}>
                                            <div className={"missions-statistics-details"}>
                                                <div className={"missions-statistics-detail"}>
                                                    <span className={"detail-label"}>Status:</span>
                                                    <span
                                                        className={"detail-value"}>{mission.status === 1 ? "Completed" : "Failed"}</span>
                                                </div>
                                                <div className={"missions-statistics-detail"}>
                                                    <span className={"detail-label"}>Lost lives:</span>
                                                    <span className={"detail-value"}>{mission.lostLives}</span>
                                                </div>
                                                <div className={"missions-statistics-detail"}>
                                                    <span className={"detail-label"}>Eliminated enemies:</span>
                                                    <span className={"detail-value"}>{mission.eliminatedEnemies}</span>
                                                </div>
                                                <div className={"missions-statistics-detail"}>
                                                    <span className={"detail-label"}>Score:</span>
                                                    <span className={"detail-value"}>{mission.score}</span>
                                                </div>
                                                <div className={"missions-statistics-detail"}>
                                                    <span className={"detail-label"}>Used time:</span>
                                                    <span className={"detail-value"}>{mission.usedTime}</span>
                                                </div>
                                                <div className={"missions-statistics-detail"}>
                                                    <span className={"detail-label"}>Played at:</span>
                                                    <span
                                                        className={"detail-value"}>{mission.createdAt.split(" ")[0]} ({mission.createdAt.split(" ")[1]})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div> :
                    <div className={"text-center"}>
                        <h3>You have not been on this mission yet</h3>
                    </div>
                }
            </section>

            <Popup trigger={modalOpen} setTrigger={setModalOpen}>
                <div className={"popup form"}>
                    <div className={"text-center"}>
                        <h3>Statistics</h3>
                        <p>{error}</p>
                    </div>
                    <div className={"text-right"}>
                        <div className={"input-form"}>
                            <button type={"submit"} className={"button mt-2 mb-2"} onClick={() => setModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
}