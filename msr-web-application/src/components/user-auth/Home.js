import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import * as HomeHandler from "./js/HomeHandler";
import {useAuth} from "../../auth/AuthProvider";

export default function Home() {

    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [user, setUser] = useState([]);

    useEffect(() => {
        HomeHandler.profile(setUser, navigate, signOut);
    }, [navigate, signOut]);

    return(
        <section id={"home"} className={"home mt-5"}>
            <div className={"container mt-2"}>
                <div className={"row"}>
                    <div className={"col-xxl-12 col-12 d-flex justify-content-center align-items-center files"}>
                        <div className={"row col-12"}>
                            <div className={"col-md-3 mb-3"}>
                                <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                    <img src={process.env.REACT_APP_IMAGES_PROFILE + user.image} alt={user.username} className={"image"}/>
                                    <span>{user.username}</span>
                                    <span>Rank: {user.rank}</span>
                                    <Link to={user.username}>View profile</Link>
                                </div>
                            </div>
                            <div className={"col-md-3 mb-3"}>
                                <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                    <img src={process.env.REACT_APP_IMAGES_OTHER + user.missionsImage} alt={"missions image"} className={"image"}/>
                                    <span>Missions</span>
                                    <span>Total: {user.missions}</span>
                                    <Link to={"missions"}>View missions</Link>
                                </div>
                            </div>
                            <div className={"col-md-3 mb-3"}>
                                <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                    <img src={process.env.REACT_APP_IMAGES_OTHER + user.leaderboardImage} alt={"leaderboard image"} className={"image"}/>
                                    <span>Leaderboard</span>
                                    <Link to={"leaderboard"}>View leaderboard</Link>
                                </div>
                            </div>
                            <div className={"col-md-3 mb-3"}>
                                <div className={"member d-flex flex-column justify-content-center align-items-center"}>
                                    <img src={process.env.REACT_APP_IMAGES_PROFILE + "basic-image.png"} alt={"profile picture4"} className={"image"}/>
                                    <span>Account</span>
                                    <Link to={"account"}>View account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}