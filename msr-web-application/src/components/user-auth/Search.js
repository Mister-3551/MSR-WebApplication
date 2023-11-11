import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";
import {useState, useEffect} from "react";
import * as SearchHandler from "./js/SearchHander";

export default function Search() {

    const {username} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        SearchHandler.search(username, setUsers, navigate, signOut);
    }, [username, location, navigate, signOut]);

    return (
        <section id={"search"} className={"search container align-items-center mt-5 p-3 p-md-4"}>
            {
                users.length !== 0 ?
                    <div className={"row mt-2 justify-content-center"}>
                        {
                            users.map((user, id) => (
                                <div key={id} className={"user col-md-12"}>
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
                    </div> :
                    <div className={"text-center"}>
                        <h3>No users are here</h3>
                    </div>
            }
        </section>
    )
}