import {useState, useEffect} from "react";
import {Popup} from "../pupop/Pupop";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import * as AccountHandler from "../user-auth/js/AccountHandler";

export default function Account() {

    const location = useLocation();
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [account, setAccount] = useState({
        id: 0,
        fullName: "",
        username: "",
        emailAddress: "",
        profileImageText: "Change Profile Image",
        profileImage: null
    });

    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AccountHandler.account(setAccount, navigate, signOut);
    }, [location, navigate, signOut]);

    return(
        <>
            <section id={"account"} className={"account d-flex align-items-center mt-5"}>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-5 text-center"}>
                            <form method={"post"} className={"input-form p-3 p-md-4"} onSubmit={(event) => AccountHandler.update(event, account, navigate, signOut, setError, setModalOpen)}>
                                <h1>Account</h1>
                                <div className={"form-group mt-2"}>
                                    <label htmlFor={"profileImage"} className={"label input form-control mt-1 text-start"}>{account.profileImageText}</label>
                                    <input id={"profileImage"} type={"file"} accept={".jpg, .png, .gif"} className={"input form-control mt-1"} hidden={true} onChange={(event) => {
                                        setAccount((prevAccount) => ({...prevAccount, profileImageText: event.target.files[0] !== undefined ? event.target.files[0].name : "Change Profile Image", profileImage: event.target.files[0] !== undefined ? event.target.files[0] : null}))}}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Full name"}
                                           value={account.fullName}
                                           onChange={(event) => setAccount((prevAccount) => ({...prevAccount, fullName: event.target.value }))}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Username"}
                                           value={account.username}
                                           onChange={(event) => setAccount((prevAccount) => ({...prevAccount, username: event.target.value }))} disabled={true}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"}
                                           placeholder={"Email address"}
                                           value={account.emailAddress}
                                           onChange={(event) => setAccount((prevAccount) => ({...prevAccount, emailAddress: event.target.value }))} disabled={true}/>
                                </div>
                                <div className={"text-center mt-2"}>
                                    <button type={"submit"} className={"button"}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Popup trigger={modalOpen} setTrigger={setModalOpen}>
                <div className={"popup form"}>
                    <div className={"text-center"}>
                        <h3>Account</h3>
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