import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "./AuthProvider";
import * as UsernameCheckerHandler from "../auth/js/UsernameCheckerHandler";
import Error404 from "../components/errors/Error404";


export default function UsernameChecker({ componentToRender }) {

    const { username } = useParams();
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const [usernameExists, setUsernameExists] = useState(null);

    useEffect(() => {
        UsernameCheckerHandler.username(username, setUsernameExists, navigate, signOut);
    }, [username, navigate, signOut]);
    return usernameExists ? componentToRender : <Error404/>;
}