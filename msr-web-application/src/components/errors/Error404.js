import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render(){
        return (
            <div className={"text-center mt-5 p-3 p-md-4"}>
                <h1>Error 404</h1>
                <h4>We are sorry but the page you are looking for does not exist.</h4>
                <Link to={"/"} className={"nav-link"}>Click here to continue to the home page</Link>
            </div>
        );
    }
}