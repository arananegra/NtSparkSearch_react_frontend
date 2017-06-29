import axios from 'axios';
const FileDownload = require('react-file-download');

export class GeneHandlerDAO {

    public constructor() {

    }

    public uploadExcelFileRequest(formData: any) {
        console.log("", formData);
        return axios({
            method: 'post',
            url: "http://0.0.0.0:5000/genehandler/upload-excel",
            timeout: 10000,
            //headers: {'content-type': 'multipart/form-data'},
            data: formData,
        }).then((response) => {
            if (response.status === 202) {
                console.log("Subido con exito");
            }
        });
    }

    public removeUnfilteredCollection() {
        return axios({
            method: 'delete',
            url: "http://0.0.0.0:5000/genehandler/delete-unfiltered",
            timeout: 1000
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
            timeout: 1000
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
            timeout: 1000
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
            timeout: 1000
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
            timeout: 1000
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
            timeout: 1000
        }).then((response) => {
            if (response) {
                if (response.status === 200) {
                    FileDownload(response.data, 'filteredIds.txt');
                }
            }
        });
    }
}