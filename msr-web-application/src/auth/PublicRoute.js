import {Navigate, useLocation} from "react-router-dom";

const PublicRoute = ({children}) => {

    const location = useLocation();

    const username = location.pathname.split("/").pop();

    const auth = localStorage.getItem("token") !== null;
    const roles = localStorage.getItem("roles");

    return (
        auth && (roles.includes("ROLE_USER") && !roles.includes("ROLE_ADMIN")) ? <Navigate to={"/u/" + username} /> : auth && roles.includes("ROLE_ADMIN") ? <Navigate to={"/a/" + username} /> : children
    );
};
export default PublicRoute;