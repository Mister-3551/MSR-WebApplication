import {useState, useEffect} from "react";
import * as WeaponsHandler from "./js/WeaponsHandler";
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../auth/AuthProvider";

export default function Weapons() {

    const { username } = useParams();
    const navigate = useNavigate();
    const {signOut} = useAuth();

    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        WeaponsHandler.weapons(username, setWeapons, navigate, signOut);
    }, [username, navigate, signOut]);
    
    return(
        <section id={"weapons"} className={"container weapons align-items-center mt-5 p-3 p-md-4"}>
            <div className={"row"}>
                {
                    weapons.map((weapon, id) =>
                        <div key={id} className={"col-lg-4 col-md-6 col-sm-12 mb-4"}>
                            <div className={"card weapons-card"}>
                                <img src={process.env.REACT_APP_IMAGES_WEAPONS + weapon.image} alt={weapon.name} className={"image mt-2"}/>
                                <div className={"card-body"}>
                                    <div className={"weapons-details"}>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Name:</span>
                                            <span className={"detail-value"}>{weapon.name}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Owned:</span>
                                            <span className={"detail-value"}>{weapon.owned ? "Owned": "Not owned"}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Price:</span>
                                            <span className={"detail-value"}>{weapon.price}€</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Shot power:</span>
                                            <span className={"detail-value"}>{weapon.shotPower}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Shots per second:</span>
                                            <span className={"detail-value"}>{weapon.shotsPerSecond}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Shot bullets:</span>
                                            <span className={"detail-value"}>{weapon.shotBullets}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Total kills:</span>
                                            <span className={"detail-value"}>{weapon.totalKills}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Enemy kills:</span>
                                            <span className={"detail-value"}>{weapon.enemyKills}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>Hostage kills:</span>
                                            <span className={"detail-value"}>{weapon.hostageKills}</span>
                                        </div>
                                        <div className={"weapons-detail"}>
                                            <span className={"detail-label"}>VIP kills:</span>
                                            <span className={"detail-value"}>{weapon.vipKills}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}