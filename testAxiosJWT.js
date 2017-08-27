const Axios = require("axios");

class testAxiosJWT {

    loginUser(email,password) {
        return Axios({
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
            console.log(response.data.response.user.authentication_token);
        });
    }
}

let testing = new testAxiosJWT();

testing.loginUser("arananegrayeye@gmail.com","alvaro");


