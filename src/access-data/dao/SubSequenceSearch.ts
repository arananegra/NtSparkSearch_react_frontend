import axios from 'axios';

export class SubSequenceSearch {
    public constructor() {

    }

    public databaseSubSequence(sequenceToFetch: string) {
        return axios({
            method: 'get',
            url: "http://0.0.0.0:5000/genefilter/sparkmatchall?sequence="+sequenceToFetch,
            timeout: 1000000,
        }).then((response) => {
            if (response.status === 200) {
                console.log("",response.data);
                return response.data;
            }
        });
    }
}