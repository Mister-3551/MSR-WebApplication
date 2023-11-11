import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Popup} from "../pupop/Pupop";
import * as ConfirmEmailAddressHandler from "../../components/no-auth/js/ConfirmEmailAddressHandler";

export default function ConfirmEmailAddress() {

    const { token } = useParams();

    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        ConfirmEmailAddressHandler.check(token, setError, setModalOpen)
    }, [token]);

    const handleConfirm = (event) => {
        ConfirmEmailAddressHandler.confirm(event, token, setError, setModalOpen)
    };

    return(
        <>
            <section id={"confirm"} className={"form d-flex align-items-center mt-5"}>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-5 text-center"}>
                            <form method={"post"} className={"input-form p-3 p-md-4"} onSubmit={handleConfirm}>
                                <h1>Confirm account</h1>
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
                        <h3>Confirm</h3>
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