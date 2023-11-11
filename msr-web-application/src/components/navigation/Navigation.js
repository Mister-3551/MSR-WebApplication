import {Container, Form, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as NavigationHandler from "./js/NavigationHandler";
import {useAuth} from "../../auth/AuthProvider";
import * as SignOutHandler from "../user-auth/js/SignOutHandler";

export default function Navigation() {

    const location = useLocation();
    const navigate = useNavigate();
    const {auth, roles, signOut} = useAuth();

    const [expanded, setExpanded] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        NavigationHandler.close(expanded, setExpanded);
    }, [expanded]);

    const closeNavbar = () => {
        setExpanded(false);
    };

    const handleSignOut = (event) => {
        SignOutHandler.signOut(event, navigate, signOut);
    };

    return (
        <Navbar id={"navbar"} bg={"light"} expand={"sm"} className={"navbar navbar-expand-lg navbar-light bg-light fixed-top"} expanded={expanded}>
            <Container fluid>
                {auth && roles.includes("ROLE_ADMIN") && !roles.includes("ROLE_USER") && (
                    <Link to={"/a/"} className={"navbar-brand"} onClick={closeNavbar}>
                        Admin
                    </Link>
                )}

                {auth && roles.includes("ROLE_USER") && !roles.includes("ROLE_ADMIN") && (
                    <Link to={"/u/"} className={"navbar-brand"} onClick={closeNavbar}>
                        Home
                    </Link>
                )}

                {auth && roles.includes("ROLE_ADMIN") && roles.includes("ROLE_USER") && (
                    <>
                        <Link to={"/a/"} className={"navbar-brand"} onClick={closeNavbar}>
                            Admin
                        </Link>
                        <Nav className={"me-auto my-2 my-lg-0"} navbarScroll>
                            <Link to={"/u/"} className={"nav-link"} onClick={() => {closeNavbar()}}>
                                Home
                            </Link>
                        </Nav>
                    </>
                )}

                {!auth && roles === null && (
                    <Link to={"/"} className={"navbar-brand"} onClick={closeNavbar}>
                        Memo Stick Rescue
                    </Link>
                )}
                <Navbar.Toggle aria-controls={"navbarScroll"} className={"navigation-hamburger"} onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id={"navbarScroll"}>
                    {
                        !auth ?
                            <>
                                <Nav className={"me-auto my-2 my-lg-0"} navbarScroll>
                                    <Link to={"/news"} className={"nav-link"} onClick={() => {closeNavbar()}}>News</Link>
                                </Nav>
                                <Nav className={"d-flex"}>
                                    <Link to={"/sign-in"} className={"nav-link"} onClick={closeNavbar}>Sign In</Link>
                                    <Link to={"/sign-up"} className={"nav-link"} onClick={closeNavbar}>Sign Up</Link>
                                </Nav>
                            </> :
                            <>
                                <Nav className={"ms-auto"}>
                                    {
                                        location.pathname !== "/u/" && location.pathname !== "/a/" && !location.pathname.includes("/missions") && !location.pathname.includes("/leaderboard") && !location.pathname.includes("/account") && !location.pathname.includes("/statistics") ?
                                            <Form className={"d-flex"} onSubmit={(event) => {
                                                NavigationHandler.search(event, username, navigate)
                                            }}>
                                                <input id={"search-input"} type={"search"}
                                                       className={"form-control me-2 navigation-search"} name={"username"}
                                                       placeholder={"Search"}
                                                       onChange={(event) => setUsername(event.target.value)}/>
                                                <button type={"submit"} className={"button"}>Search</button>
                                            </Form> : null
                                    }
                                    <Nav className={"ms-auto"}>
                                        <Link to={"/sign-in"} className={"nav-link ms-auto"} onClick={(event) => { closeNavbar(); handleSignOut(event); }}>Sign Out</Link>
                                    </Nav>
                                </Nav>
                            </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}