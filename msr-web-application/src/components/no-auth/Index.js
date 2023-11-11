import { GoLocation } from "react-icons/go";
import { BsClock, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import {useState} from "react";
import * as IndexHandler from "./js/IndexHandler";
import {Popup} from "../pupop/Pupop";

export default function Index() {

    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleContact = (event) => {
        IndexHandler.contact(event, fullName, emailAddress, subject, message, setError, setModalOpen);
    };

    return(
        <>
            <section id={"about"} className={"d-flex align-items-center about mt-5"}>
                <div className={"container"}>
                    <div className={"row justify-content-between gy-5"}>
                        <h1 className={"text-center p-3 p-md-4"}>Memo Stick Rescue</h1>
                        <div className={"col-lg-7 order-1 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"}>
                            <p>
                                <video className={"img-fluid"} controls autoPlay={false} loop={true}>
                                    <source src={"https://api.memostickrescue.eu.org/video/trailer-video.mp4"} type={"video/mp4"}/>
                                    <track src={"../captions/En.vtt"} kind={"captions"} srcLang={"en"} label={"english_captions"}/>
                                </video>
                            </p>
                        </div>
                        <div className={"col-lg-5 order-2 order-lg-2 text-center text-lg-start"}>
                            <h3 className={"text-center"}>About</h3>
                            <p>
                                Memo Stick Rescue provides a dramatic experience like no other. In Memo Stick Rescue, you can fight enemies while trying to make your way to the end of the current game map. Do more and be more by playing to your strengths and creating your path to victory. Immerse yourself in the glorious chaos of all-out fun and tactics only available in Memo Stick Rescue.
                            </p>
                            <div className={"text-center"}>
                                <a href={"#download"}>
                                    <button type={"button"} value={"Download"} className={"button mb-3"}>Download</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"download"} className={"download"}>
                <div className={"container"}>
                    <div className={"text-center mt-5 mb-3"}>
                        <h2>Download</h2>
                        <p>Memo Stick Rescue</p>
                    </div>
                    <div className={"row"}>
                        <div className={"col-xxl-4 mx-auto"}>
                            <div className={"requirements"}>
                                <h3>System requirements</h3>
                                <p><b>OS:</b> Windows 7</p>
                                <p><b>Processor (AMD):</b> Athlon X2 2.2 GHz</p>
                                <p><b>Processor (Intel):</b> Core 2 Duo 2.4 GHz</p>
                                <p><b>Memory: </b> 512MB</p>
                                <p><b>Hard Drive:</b> 100MB</p>
                                <p><b>Graphics card (AMD):</b> AMD Radeon HD 3870</p>
                                <p><b>Graphics card (NVIDIA):</b> Nvidia GeForce 8600</p>
                                <p><b>Graphics memory:</b> 64MB</p>
                            </div>
                        </div>
                        <div className={"col-xxl-8 col-12 d-flex justify-content-center align-items-center files"}>
                            <div className={"row col-12"}>
                                <div className={"col-md-4 mb-4"}>
                                    <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                        <img src={"https://api.memostickrescue.eu.org/other/windows-icon.png"} alt={"windows-icon"} className={"image"}/>
                                        <h4>Windows</h4>
                                        <p>EXE file</p>
                                        <div className={"text-center"}>
                                            <a href={"/"}>Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-md-4 mb-4"}>
                                    <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                        <img src={"https://api.memostickrescue.eu.org/other/linux-icon.png"} alt={"linux-icon"} className={"image"}/>
                                        <h4>Linux</h4>
                                        <p>ZIP file</p>
                                        <div className={"text-center"}>
                                            <a href={"/"}>Download</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-md-4 mb-4"}>
                                    <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                        <img src={"https://api.memostickrescue.eu.org/other/android-icon.png"} alt={"android-icon"} className={"image"}/>
                                        <h4>Android</h4>
                                        <p>APK file</p>
                                        <div className={"text-center"}>
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"github"} className={"github"}>
                <div className={"container"}>
                    <div className={"text-center mt-5 mb-3"}>
                        <h2>GitHub</h2>
                        <p>Source code</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-4 mb-4"}>
                        <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                            <img src={"https://api.memostickrescue.eu.org/other/github-icon.png"} alt={"windows-icon"} className={"image"} />
                            <h4>Video game</h4>
                            <i className={"description"}>This code gives us insight into the game itself, in which everything takes place. From the store where you can buy different skins, to the game itself, which you can play</i>
                            <div className={"text-center mt-4"}>
                                <a href={"https://github.com/Mister-3551/MemoStickRescue"} target={"_blank"} rel={"noreferrer"}>View code</a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4 mb-4"}>
                        <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                            <img src={"https://api.memostickrescue.eu.org/other/github-icon.png"} alt={"linux-icon"} className={"image"} />
                            <h4>Web application</h4>
                            <i className={"description"}>This code provides insight into the development process of a web application designed to view your stats and stats from any player</i>
                            <div className={"text-center mt-4"}>
                                <a href={"https://github.com/Mister-3551/Frontend"} target={"_blank"} rel={"noreferrer"}>View code</a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4 mb-4"}>
                        <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                            <img src={"https://api.memostickrescue.eu.org/other/github-icon.png"} alt={"android-icon"} className={"image"} />
                            <h4>Server application</h4>
                            <i className={"description"}>This code gives us insight into the very background and logic of the so-called backend, which is intended for data calculation</i>
                            <div className={"text-center mt-4"}>
                                <a href={"https://github.com/Mister-3551/Backend"} target={"_blank"} rel={"noreferrer"}>View code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"map"} className={"map"}>
                <div className={"container"}>
                    <div className={"text-center mt-5 mb-3"}>
                        <h2>Maps</h2>
                        <p>Where you can find us</p>
                    </div>
                    <div className={"mb-3"}>
                        <iframe title={"where-you-can-find-us"} src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d255.53434261385195!2d15.159124358432399!3d45.79466198869133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2298240b79843a59%3A0xd1574de3c5d8e8f0!2sMemo%20Stick%20Rescue!5e0!3m2!1ssl!2ssi!4v1695751858491!5m2!1ssl!2ssi"}
                                allowFullScreen={""} loading={"lazy"}
                                referrerPolicy={"no-referrer-when-downgrade"} className={"google-maps"}></iframe>
                    </div>
                    <div className={"row gy-4"}>
                        <div className={"col-md-6"}>
                            <div className={"info-item  d-flex align-items-center"}>
                                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                                    <GoLocation className={"icon bi"}/>
                                </IconContext.Provider>
                                <div>
                                    <h3>Our Address</h3>
                                    <p>School center of Novo mesto</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className={"info-item d-flex align-items-center"}>
                                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                                    <HiOutlineMail className={"icon bi"}/>
                                </IconContext.Provider>
                                <div>
                                    <h3>Email Us</h3>
                                    <p><a href={"mailto:info@memostickrescue.eu.org"} className={"text-dark"}>info@memostickrescue.eu.org</a></p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className={"info-item  d-flex align-items-center"}>
                                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                                    <BsTelephone className={"icon bi"}/>
                                </IconContext.Provider>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>Not available</p>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6"}>
                            <div className={"info-item  d-flex align-items-center"}>
                                <IconContext.Provider value={{ color: "white", size: "30px" }}>
                                    <BsClock className={"icon bi"}/>
                                </IconContext.Provider>
                                <div>
                                    <h3>Opening Hours</h3>
                                    <div>
                                        <b>Mon-Sat:</b> 11AM - 11PM <br/>
                                        <b>Sunday:</b> Closed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"contact"} className={"form d-flex align-items-center mt-5"}>
                <div className={"container"}>
                    <div className={"text-center mt-5 mb-3"}>
                        <h2>Contact</h2>
                        <p>Need help? - Contact us</p>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-5 text-center"}>
                            <form method={"post"} className={"input-form"} onSubmit={handleContact}>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"} name={"fullName"}
                                           placeholder={"Full name"}
                                           value={fullName}
                                           onChange={(event) => setFullName(event.target.value)}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"} name={"emailAddress"}
                                           placeholder={"Email address"}
                                           value={emailAddress}
                                           onChange={(event) => setEmailAddress(event.target.value)}/>
                                </div>
                                <div className={"form-group mt-2"}>
                                    <input type={"text"} className={"input form-control mt-1"} name={"subject"}
                                           placeholder={"Subject"}
                                           value={subject}
                                           onChange={(event) => setSubject(event.target.value)}/>
                                </div>
                                <div className={"form-group mt-2"}>
                        <textarea className={"form-control mt-1 textarea"} name={"message"} rows={"5"} placeholder={"Message"}
                                  value={message}
                                  onChange={(event) => setMessage(event.target.value)}/>
                                </div>
                                <div className={"text-center mt-2 mb-4"}>
                                    <button type={"submit"} className={"button"}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Popup trigger={modalOpen} setTrigger={setModalOpen}>
                <div className={"popup form"}>
                    <div className={"text-center"}>
                        <h3>Contact</h3>
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