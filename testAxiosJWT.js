const Axios = require("axios");

class testAxiosJWT {

    loginUser(email, password) {
        return Axios({
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

let testing = new testAxiosJWT();

let token = testing.loginUser("arananegrayeye@gmail.com", "alvaro");
token.then((response) => {
    console.log(response)
}).catch((error) => {
    if (error.response.data.response.errors.password ||  error.response.data.response.errors.email[0] === 'Email requires confirmation.') {
        console.log("Contraseña incorrecta")
    }
    console.log(error.response.data.response.errors);
});




