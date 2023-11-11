import {useState, useEffect} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import * as ProfileHandler from "./js/ProfileHandler";
import {useAuth} from "../../auth/AuthProvider";

export default function Profile() {

    const { username } = useParams();
    const navigate = useNavigate();
    const {signOut} = useAuth();
    const location = useLocation();

    const [profile, setProfile] = useState([]);
    const [buttonText, setButtonText] = useState("");
    const [newFollower, setNewFollower] = useState(0);
    const [checkUsername, setCheckUsername] = useState("");

    useEffect(() => {
        ProfileHandler.profile(username, setProfile, setButtonText, setNewFollower, navigate, signOut);
        setCheckUsername(ProfileHandler.decodeToken(localStorage.getItem("token")).user.username)
    }, [username, navigate, signOut]);

    return(
        <section id={"profile"} className={"profile mt-5"}>
            <div className={"container"}>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <div className={"user align-items-center"}>
                            <div className={"user-info"}>
                                <img src={process.env.REACT_APP_IMAGES_PROFILE + profile.image} alt={"user"} className={"image"}/>
                                <div className={"heading-box"}>
                                    <h1>{profile.username}</h1>
                                    <h3>Rank {profile.rank}</h3>
                                </div>
                            </div>
                            {
                                location.pathname !== "/u/" + checkUsername ?
                                    <div className={"follow-button"}>
                                        <button id={"follow-button"} className={"button"} onClick={() => ProfileHandler.follow(username, setButtonText, newFollower, setNewFollower, navigate, signOut)}>{buttonText}</button>
                                    </div> : null
                            }
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"card-main"}>
                                <div className={"activity"}>
                                    <span className={"activity-name"}>{profile.currentXp} / {profile.nextXp} XP</span>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"card-main"}>
                                <Link to={"followers"} className={"activity"}>
                                    <span className={"activity-name"}>{newFollower} Followers</span>
                                </Link>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"card-main"}>
                                <Link to={"following"} className={"activity"}>
                                    <span className={"activity-name"}>{profile.following} Following</span>
                                </Link>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"card-main"}>
                                <Link to={"weapons"} className={"activity"}>
                                    <span className={"activity-name"}>Weapons</span>
                                </Link>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"card-main"}>
                                <div className={"activity"}>
                            <span className={"activity-name"}>
                                {profile.completed}% Completed
                            </span>
                                </div>
                            </div>
                        </div>
                        <div className={"col-lg-4 col-md-6 col-sm-12 mb-4"}>
                            <div className={"card-main"}>
                                <div className={"activity"}>
                                    <span className={"activity-name"}>{ProfileHandler.secondsToTime(profile.playTime)} Played</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}