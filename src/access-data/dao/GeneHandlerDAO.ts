import axios from 'axios';
const FileDownload = require('react-file-download');

export class GeneHandlerDAO {

    public constructor() {

    }

    public uploadExcelFileRequest(file: any, email: string) {
        const formData = new FormData();
        formData.append('excelFile',file);
        return axios({
            method: 'post',
            url: "http://0.0.0.0:5000/genehandler/upload-excel?" + email,
            timeout: 1000,
            //headers: {'content-type': 'multipart/form-data'},
            data: formData,
        }).then((response) => {
            console.log("hola mundo")
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