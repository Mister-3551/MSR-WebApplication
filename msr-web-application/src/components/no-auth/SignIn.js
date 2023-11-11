import { useState } from "react";
import * as SignInHandler from "./js/SignInHandler";
import {Link, useNavigate} from "react-router-dom";
import {Popup} from "../pupop/Pupop";
import {useAuth} from "../../auth/AuthProvider";

export default function SignIn() {

    const navigate = useNavigate();
    const { signIn } = useAuth();

    const [emailUsernameEmailAddress, setEmailUsernameEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleSignIn = (event) => {
        SignInHandler.signIn(event, emailUsernameEmailAddress, password, setError, setModalOpen, navigate, signIn);
    };

    return (
        <>
            <section id={"sign-in"} className={"form d-flex align-items-center mt-5"}>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-5 text-center"}>
                            <form method={"post"} className={"input-form p-3 p-md-4"} onSubmit={handleSignIn}>
                                <h1>Sign in</h1>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"} name={"emailAddressUsername"}
                                           placeholder={"Enter email address or username"}
                                           value={emailUsernameEmailAddress}
                                           onChange={(event) => setEmailUsernameEmailAddress(event.target.value)} />
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"password"} className={"input form-control mt-1"} name={"password"}
                                           placeholder={"Enter password"}
                                           value={password}
                                           onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className={"form-group text-sm-start mt-2"}>
                                    <Link to={"/reset"}>Forgot Password?</Link>
                                </div>
                                <div className={"text-center mt-2"}>
                                    <button type={"submit"} className={"button"}>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Popup trigger={modalOpen} setTrigger={setModalOpen}>
                <div className={"popup form"}>
                    <div className={"text-center"}>
                        <h3>Sign in</h3>
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