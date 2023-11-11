import {useState, useEffect} from "react";
import {Popup} from "../pupop/Pupop";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import * as MissionHandler from "../admin-auth/js/MissionHandler";

export default function AdminMissions() {

    const location = useLocation();
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [missions, setMissions] = useState({
        name: "",
        description: "",
        missionImageText: "Choose Mission Image",
        missionImage: null,
        missionMapText: "Choose Mission Map",
        missionMap: null,
        price: "",
        bestTime: "",
        deadline: ""
    });

    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
    }, [location, navigate, signOut]);

    return(
        <>
            <section id={"AddMissions"} className={"addMissions d-flex align-items-center mt-5"}>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-5 text-center"}>
                            <form method={"post"} className={"input-form p-3 p-md-4"} onSubmit={(event) => MissionHandler.add(event, missions, navigate, signOut, setError, setModalOpen)}>
                                <h1>Add mission</h1>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Name"}
                                           value={missions.name}
                                           onChange={(event) => setMissions((prevAccount) => ({...prevAccount, name: event.target.value }))}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Description"}
                                           value={missions.description}
                                           onChange={(event) => setMissions((prevAccount) => ({...prevAccount, description: event.target.value }))}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <label htmlFor={"missionImage"} className={"label input form-control mt-1 text-start"}>{missions.missionImageText}</label>
                                    <input id={"missionImage"} type={"file"} accept={".jpg, .png, .gif"} className={"input form-control mt-1"} hidden={true} onChange={(event) => {
                                        setMissions((prevAccount) => ({...prevAccount, missionImageText: event.target.files[0] !== undefined ? event.target.files[0].name : "Choose Mission Image", missionImage: event.target.files[0] !== undefined ? event.target.files[0] : null}))}}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <label htmlFor={"missionMap"} className={"label input form-control mt-1 text-start"}>{missions.missionMapText}</label>
                                    <input id={"missionMap"} type={"file"} accept={".tmx"} className={"input form-control mt-1"} hidden={true} onChange={(event) => {
                                        setMissions((prevAccount) => ({...prevAccount, missionMapText: event.target.files[0] !== undefined ? event.target.files[0].name : "Choose Mission Map", missionMap: event.target.files[0] !== undefined ? event.target.files[0] : null}))}}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Price"}
                                           value={missions.price}
                                           onChange={(event) => setMissions((prevAccount) => ({...prevAccount, price: event.target.value }))}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Best time (00:00:00)"}
                                           value={missions.bestTime}
                                           onChange={(event) => setMissions((prevAccount) => ({...prevAccount, bestTime: event.target.value }))}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Deadline (00:00:00)"}
                                           value={missions.deadline}
                                           onChange={(event) => setMissions((prevAccount) => ({...prevAccount, deadline: event.target.value }))}/>
                                </div>
                                <div className={"text-center mt-2"}>
                                    <button type={"submit"} className={"button"}>Add mission</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Popup trigger={modalOpen} setTrigger={setModalOpen}>
                <div className={"popup form"}>
                    <div className={"text-center"}>
                        <h3>Missions</h3>
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