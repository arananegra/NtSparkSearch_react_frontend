import {GeneSubSequenceSearcherDTO} from "../../domain/GeneSubSequenceSearcherDTO";
import {GeneSubsequenceResultDTO} from "../../domain/GeneSubsequenceResultDTO";

export class GeneSubSequenceDAO {

    public constructor() {

    }

    public findSubSequenceInGeneList(geneSubSequenceToSearch: GeneSubSequenceSearcherDTO): Array<GeneSubsequenceResultDTO> {
        let geneSubSequenceListFound: Array<GeneSubsequenceResultDTO>;
        let singleSequenceGene: GeneSubsequenceResultDTO;

        try {
            geneSubSequenceListFound = new Array<GeneSubsequenceResultDTO>();

            singleSequenceGene = new GeneSubsequenceResultDTO();
            singleSequenceGene._geneId = 234;
            singleSequenceGene._haveSequence = 1;
            geneSubSequenceListFound.push(singleSequenceGene);


            singleSequenceGene = new GeneSubsequenceResultDTO();
            singleSequenceGene._geneId = 534;
            singleSequenceGene._haveSequence = 1;
            geneSubSequenceListFound.push(singleSequenceGene);

            return geneSubSequenceListFound;
        } catch(Exception) {
            throw Exception;
        }
    }


}