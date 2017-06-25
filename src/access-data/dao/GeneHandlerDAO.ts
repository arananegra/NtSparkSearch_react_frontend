import axios from 'axios';

export class GeneHandlerDAO {

    public constructor() {

    }

    public removeUnfilteredCollection() {
        return axios({
            method: 'delete',
            url: "http://0.0.0.0:5000/genehandler/delete-unfiltered",
            timeout: 1000
        }).then((response) => {
            if (response) {
                //console.log("", response.data.security.toString());
                return response.status;
            }
        });
    }

    public removeFilteredCollection() {
        return axios({
            method: 'delete',
            url: "http://0.0.0.0:5000/genehandler/delete-filtered",
            timeout: 1000
        }).then((response) => {
            if (response) {
                //console.log("", response.data.security.toString());
                return response.status;
            }
        });
    }
}