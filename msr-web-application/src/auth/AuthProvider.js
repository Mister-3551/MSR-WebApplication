import {createContext, useContext, useState} from "react";
import jwt_decode from "jwt-decode";

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}) {

    const [auth, setAuth] = useState(localStorage.getItem("token") !== null);
    const [roles, setRoles] = useState(localStorage.getItem("roles"));

    const signIn = () => {
        const token = localStorage.getItem("token");
        const decodedToken = decodeToken(token);
        if (decodedToken) {
            const roles = JSON.stringify(decodedToken.authorities);
            setRoles(roles);
            localStorage.setItem("roles", roles);
            setAuth(true);

            if (roles.includes("ROLE_ADMIN") || (roles.includes("ROLE_ADMIN") && roles.includes("ROLE_USER"))) {
                return "/a/";
            } else {
                return "/u/";
            }
        }
        return null;
    };

    const signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        setRoles(null);
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{ auth, roles, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const AuthContext = createContext({
    auth: false,
    setAuth: () => {},
    roles: "",
    setRoles: () => {},
    signIn: () => {},
    signOut: () => {}
});

const decodeToken = (token) => {
   return token !== null ? jwt_decode(token) : null;
}