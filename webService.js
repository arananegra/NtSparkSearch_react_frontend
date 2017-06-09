//import * as Axios from "axios";
//import * as Q from "q";

let Axios = require("axios");

class webService {
    constructor() {

        let deferred = Q.defer();

        return Axios({
            method: 'GET',
            url: "https://www.googleAAA.es/",
            timeout: 1000
        }).then((response) => {
            if (response) {
                //return response;
                console.log("", response.data);

                deferred.resolve(response);
            }
        });


        return deferred.promise();

        for (let i=0; i<100;i++) {
            console.log("NUMBER: ", i);
            this.saludar();
        }

        for (let i=0; i<100;i++) {
            console.log("NUMBER: ", i);
        }


    }
    saludar() {
        //console.log("Hello!!!");
        this.saludar1();
    }
    saludar1() {
        //console.log("Hello!!!");
        this.saludar2();

    }

    saludar2() {
        console.log("Hello!!!");
    }




}

new webService();