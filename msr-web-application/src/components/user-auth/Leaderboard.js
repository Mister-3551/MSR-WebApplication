import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {useAuth} from "../../auth/AuthProvider";
import * as LeaderboardHandler from "./js/LeaderboardHandler";

export default function Leaderboard() {

    const location = useLocation();
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        LeaderboardHandler.leaderboard(setUsers, navigate, signOut);
    }, [location, navigate, signOut]);

    return(
        <section id={"leaderboard"} className={"leaderboard container align-items-center mt-5 p-3 p-md-4"}>
            <div className={"row mt-2"}>
                {
                    users.map((user, id) => (
                        <div key={id} className={"user col-lg-4 col-md-6 col-sm-12 mb-1"}>
                            <div className={"card"}>
                                <div className={"card-body d-flex align-items-center"}>
                                    <div>
                                        <img src={process.env.REACT_APP_IMAGES_PROFILE + user.image} alt={user.username} className={"image"}/>
                                    </div>
                                    <div className={"flex-grow-1 ml-3"}>
                                        <h5 className={"card-title"}>{user.username}</h5>
                                        <p className={"card-text"}>{"Rank " + user.rank}</p>
                                    </div>
                                    <div>
                                        <Link to={"/u/" + user.username} className={"link"}>
                                            <span className={"button"}>View</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}