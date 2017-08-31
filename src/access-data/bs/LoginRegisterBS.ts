import axios from 'axios';
import {Constants} from "../../common/Constants";

export class LoginRegisterBS {

    public constructor() {

    }

    public getJWTtokenFromSession() {
        try {
            return sessionStorage.getItem(Constants.TOKEN_SAVING_STRING);
        } catch (Exception) {
            throw Exception;
        }
    }

    public setJWTtokenFromSession(tokenString) {
        return sessionStorage.setItem(Constants.TOKEN_SAVING_STRING, tokenString);
    }

    public removeJWTtokenFromSession() {
        try {
            return sessionStorage.removeItem(Constants.TOKEN_SAVING_STRING);
        } catch (Exception) {
            throw Exception;
        }
    }

    public loginUser(email, password) {
        return axios({
            data: {
                "email": email,
                "password": password
            },
            method: 'post',
            url: "http://0.0.0.0:5000/login",
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return (response.data);
        });
    }

    public registerUser(email, password) {
        return axios({
            data: {
                "email": email,
                "password": password
            },
            method: 'post',
            url: "http://0.0.0.0:5000/register",
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return (response.data);
        });
    }
}