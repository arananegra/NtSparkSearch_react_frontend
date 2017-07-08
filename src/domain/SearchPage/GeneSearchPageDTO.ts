import {GeneSubSequenceSearcherDTO} from "../GeneSubSequenceSearcherDTO";
import {GeneSubsequenceResultDTO} from "../GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../TableHeaderColumnDTO";

export class GeneSearchPageDTO {
    public _geneSubSequenceSearcher: GeneSubSequenceSearcherDTO;
    public _geneSubSequenceResultFound: Array<GeneSubsequenceResultDTO>;
    public _geneTableResultHeaderColumns: Array<TableHeaderColumnDTO>;
    public _showModalDialogSearchRequest: boolean;
    public _showSnackBarDirectDownloadStarted: boolean;
    public _loaded : boolean;
    public _emailToDownloadFromDirect: string;

    public constructor() {
        this._geneSubSequenceResultFound = null;
        this._geneSubSequenceSearcher = null;
        this._geneTableResultHeaderColumns = null;
        this._showModalDialogSearchRequest = null;
        this._loaded = null;
        this._emailToDownloadFromDirect = null;
        this._showSnackBarDirectDownloadStarted = null;
    }
}