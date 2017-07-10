import axios from 'axios';
import {GeneDTO} from "../../domain/GeneDTO";

export class SubSequenceSearch {
    public constructor() {

    }

    private encodeQueryData(data) {
        let ret = [];
        for (let d in data) {
            if (data.hasOwnProperty(d)) {
                ret.push("gene_id" + '=' + encodeURIComponent(data[d]._gene_id));
            }
        }
        return ret.join('&');
    }

    public databaseSubSequence(sequenceToFetch: string) {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genefilter/sparkmatchall?sequence=" + sequenceToFetch,
            timeout: 1000000,
        }).then((response) => {
            return response;

        });
    }

    public genesChecker(sequenceToFetch: string, arrayOfGenesToFetch: Array<GeneDTO>) {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genefilter/genes-checker?" + this.encodeQueryData(arrayOfGenesToFetch) + "&sequence=" + sequenceToFetch,
            timeout: 1000000,
        }).then((response) => {
            return response;
        });
    }

    public downloadGenesFromListToUnfiltered(arrayOfGenesToFetch: Array<GeneDTO>, email: string) {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genefilter/genes-downloader?" + this.encodeQueryData(arrayOfGenesToFetch) + "&email=" + email,
            timeout: 1000000,
        }).then((response) => {
            if (response) {
                return response;
            }
        });
    }
}