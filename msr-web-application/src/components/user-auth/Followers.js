import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useEffect, useState} from "react";
import * as FollowersHandler from "./js/FollowersHandler";

export default function Followers() {

    const {username} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (location.pathname === "/u/" + username + "/followers") {
            FollowersHandler.followers(username, setUsers, navigate, signOut);
        } else if (location.pathname === "/u/" + username + "/following") {
            FollowersHandler.following(username, setUsers, navigate, signOut);
        }
    }, [username, location, navigate, signOut]);

    return(
        <section id={"followers"} className={"followers container align-items-center mt-5 p-3 p-md-4"}>
            {
                users.length !== 0 ?
                    <div className={"row mt-2 justify-content-center"}>
                        {
                            users.map((follower, id) => (
                                <div key={id} className={"user col-md-12"}>
                                    <div className={"card"}>
                                        <div className={"card-body d-flex align-items-center"}>
                                            <div>
                                                <img src={process.env.REACT_APP_IMAGES_PROFILE + follower.image} alt={follower.username} className={"image"}/>
                                            </div>
                                            <div className={"flex-grow-1 ml-3"}>
                                                <h5 className={"card-title"}>{follower.username}</h5>
                                                <p className={"card-text"}>{"Rank " + follower.rank}</p>
                                            </div>
                                            <div>
                                                <Link to={"/u/" + follower.username} className={"link"}>
                                                    <span className={"button"}>View</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> :
                    <div className={"text-center"}>
                        <h3>No users are here</h3>
                    </div>
            }
        </section>
    );
}