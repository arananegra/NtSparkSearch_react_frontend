//import * as Axios from "axios";
//import * as Q from "q";

//let GeneDTO = require("/src/domain/GeneDTO");
let Axios = require("axios");
let Q = require("q");
class webService {

    constructor() {

        //let deferred = Q.defer();

        return Axios({
            method: 'GET',
            url: "http://0.0.0.0:5000/",
            timeout: 1000
        }).then((response) => {
            if (response) {
                console.log("", response.data);
                return response.data;

                //console.log(deferred.resolve(response.data));
            }
        });


        //return deferred.promise();

        /*        for (let i=0; i<100;i++) {
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
         }*/
    }

    // testingAxiosQ() {
    //     let deferred = Q.defer();
    //     let dataGeneList = [];
    //
    //     axios({
    //         method: 'GET',
    //         url: "http://www.google.es/",
    //         timeout: 15000,
    //         headers : {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "*",
    //             "Access-Control-Allow-Headers": "*"
    //         }
    //     }).then((response) => {
    //         if (response) {
    //             return response;
    //         }
    //     });
    //
    //     deferred.resolve("A");
    //
    //     return deferred.promise;
    //
    // }
}

new webService();