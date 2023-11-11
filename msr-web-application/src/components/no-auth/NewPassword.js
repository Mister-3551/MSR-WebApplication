import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import * as NewHandler from "./js/NewPasswordHandler";
import {Popup} from "../pupop/Pupop";

export default function NewPassword() {

    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        NewHandler.check(token, setError, setModalOpen);
    }, [token]);

    const handleNewPassword = (event) => {
        NewHandler.newPassword(event, token, password, confirmPassword, setError, setModalOpen);
    };

    return (
        <>
            <section id={"new-password"} className={"form d-flex align-items-center mt-5"}>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-5 text-center"}>
                            <form method={"post"} className={"input-form p-3 p-md-4"} onSubmit={handleNewPassword}>
                                <h1>Set new password</h1>
                                <div className={"form-group mt-2"}>
                                    <input type={"password"} className={"input form-control mt-1"} name={"password"}
                                           placeholder={"Enter password"}
                                           value={password}
                                           onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"password"} className={"input form-control mt-1"} name={"confirmPassword"}
                                           placeholder={"Re-enter password"}
                                           value={confirmPassword}
                                           onChange={(event) => setConfirmPassword(event.target.value)} />
                                </div>
                                <div className={"text-center mt-2"}>
                                    <button type={"submit"} className={"button"}>Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Popup trigger={modalOpen} setTrigger={setModalOpen}>
                <div className={"popup form"}>
                    <div className={"text-center"}>
                        <h3>New password</h3>
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