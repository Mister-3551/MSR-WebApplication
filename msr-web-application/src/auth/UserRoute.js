import {Navigate} from "react-router-dom";

const UsersRoute = ({children}) => {

    const auth = localStorage.getItem("token") !== null;
    const roles = localStorage.getItem("roles");

    return (
        auth && !roles.includes("ROLE_USER") && !roles.includes("ROLE_ADMIN") ? <Navigate to={"/sign-in"}/> : roles.includes("ROLE_ADMIN") && !roles.includes("ROLE_USER") ? <Navigate to={"/a/"}/>  : children
    );
};
export default UsersRoute;