import axios from 'axios';
import {LoginRegisterBS} from "../bs/LoginRegisterBS";
const FileDownload = require('react-file-download');

export class GeneHandlerDAO {

    private token : string = null;

    public constructor() {
        this.token = new LoginRegisterBS().getJWTtokenFromSession();
    }

    public uploadExcelFileRequest(formData: any, email: any) {

        if (email === "") {
            return axios({
                method: 'post',
                url: "http://0.0.0.0:5000/genehandler/upload-excel",
                timeout: 100000,
                headers: {
                    'authentication_token': this.token
                },
                data: formData,
            }).then((response) => {
                if (response.status === 202) {
                    return 202;
                }
            });
        }
        else {
            return axios({
                method: 'post',
                url: "http://0.0.0.0:5000/genehandler/upload-excel?email=" + email,
                timeout: 100000,
                data: formData,
                headers: {
                    'authentication_token': this.token
                },
            }).then((response) => {
                if (response.status === 202) {
                    return 202;
                }
            });
        }
    }

    public uploadFastaFileRequest(formData: any) {
        return axios({
            method: 'post',
            url: "http://0.0.0.0:5000/genehandler/upload-fasta",
            timeout: 100000,
            data: formData,
            headers: {
                'authentication_token': this.token
            },
        }).then((response) => {
            if (response.status === 202) {
                return 202;
            }
        });
    }

    public removeUnfilteredCollection() {
        return axios({
            method: 'delete',
            url: "http://0.0.0.0:5000/genehandler/delete-unfiltered",
            timeout: 1000,
            headers: {
                'authentication_token': this.token
            },
        }).then((response) => {
            let showSnackBarUnfiltered: boolean = false;
            if (response) {
                if (response.status === 200) {
                    showSnackBarUnfiltered = true;
                    return showSnackBarUnfiltered;
                }
            }
        });
    }

    public removeFilteredCollection() {
        return axios({
            method: 'delete',
            url: "http://0.0.0.0:5000/genehandler/delete-filtered",
            timeout: 1000,
            headers: {
                'authentication_token': this.token
            },
        }).then((response) => {
            let showSnackBarFiltered: boolean = false;
            if (response) {
                if (response.status === 200) {
                    showSnackBarFiltered = true;
                    return showSnackBarFiltered;
                }
            }
        });
    }

    public downloadUnfilteredFasta() {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genehandler/download-fasta-unfiltered",
            timeout: 1000000,
            headers: {
                "cache-control": "no-cache",
                'authentication_token': this.token
            }
        }).then((response) => {
            if (response) {
                if (response.status === 200) {
                    FileDownload(response.data, 'unfilteredFasta.fasta');
                }
            }
        });
    }

    public downloadFilteredFasta() {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genehandler/download-fasta-filtered",
            timeout: 1000000,
            headers: {
                "cache-control": "no-cache",
                'authentication_token': this.token
            }
        }).then((response) => {
            if (response) {
                if (response.status === 200) {
                    FileDownload(response.data, 'filteredFasta.fasta');
                }
            }
        });
    }

    public downloadUnfilteredIds() {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genehandler/download-id-unfiltered",
            timeout: 1000000,
            headers: {
                "cache-control": "no-cache",
                'authentication_token': this.token
            }
        }).then((response) => {
            if (response) {
                if (response.status === 200) {
                    FileDownload(response.data, 'unfilteredIds.txt');
                }
            }
        });
    }

    public downloadFilteredIds() {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genehandler/download-id-filtered",
            timeout: 1000000,
            headers: {
                "cache-control": "no-cache",
                'authentication_token': this.token
            }
        }).then((response) => {
            if (response) {
                if (response.status === 200) {
                    FileDownload(response.data, 'filteredIds.txt');
                }
            }
        });
    }
}