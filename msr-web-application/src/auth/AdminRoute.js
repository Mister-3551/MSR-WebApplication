import {Navigate} from "react-router-dom";

const AdminRoute = ({children}) => {

    const auth = localStorage.getItem("token") !== null;
    const roles = localStorage.getItem("roles");

    return (
        auth && !roles.includes("ROLE_ADMIN") ? <Navigate to={"/u/"}/> : children
    );
};
export default AdminRoute;