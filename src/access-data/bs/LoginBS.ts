import axios from 'axios';

export class LoginBS {

    public constructor() {

    }

    public getJWTtokenFromSession() {
        try {
            return sessionStorage.getItem("token");
        } catch (Exception) {
            throw Exception;
        }
    }

    public setJWTtokenFromSession(tokenString) {
        return sessionStorage.setItem("token", tokenString);
    }

    public removeJWTtokenFromSession() {
        try {
            return sessionStorage.removeItem("token");
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
            return (response.data.response.user.authentication_token);
        });
    }
}