const Axios = require("axios");

class testAxiosJWT {

    loginUser(email, password) {
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
            return (response.data);
        });
    }
}

let testing = new testAxiosJWT();

let token = testing.loginUser("arananegrayeye@gmail.co", "alvaro");
token.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error.response);
});




