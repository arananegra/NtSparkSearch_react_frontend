// import axios from 'axios';
// import * as Q from "q";
// import {GeneDTO} from "../../domain/GeneDTO";
//
// export class TestAxiosQDAO {
//     constructor() {
//
//     }
//
//     public testingAxiosQ(): Q.IPromise<Array<GeneDTO>> {
//         let deferred = Q.defer();
//         let dataGeneList: Array<GeneDTO>;
//         //let axiosConfig: AxiosRequestConfig;
//
//         // axiosConfig = new AxiosConfigurationDTO();
//         //
//         // axiosConfig.url = "www.google.es";
//         // axiosConfig.method = "GET";
//         // axiosConfig.timeout = 1500;
//
//         dataGeneList = new Array<GeneDTO>();
//
//         axios({
//             method: 'GET',
//             url: "http://www.google.es/",
//             timeout: 15000,
//             headers : {
//                 "Access-Control-Allow-Origin": "*",
//                 "Access-Control-Allow-Methods": "*",
//                 "Access-Control-Allow-Headers": "*"
//             }
//         }).then((response) => {
//             if (response) {
//                 return response;
//             }
//         });
//
//         deferred.resolve("A");
//
//         return deferred.promise;
//
//     }
//
// }