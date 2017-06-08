import * as objectAssign from "object-assign";
import {Action} from "redux";
//import {ExpressionGeneTableDTO} from "../domain/GeneSubsequenceResultDTO";
import {ActionConstants} from "../actions/ActionConstants";
//import {HeatMapPage} from "../pages/SubSequenceSearchPage";
//import {GeneDTO} from "../domain/GeneDTO";
//import {SubSequenceSearchPage} from "../pages/SubSequenceSearchPage";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {GeneSearchPageDTO} from "../domain/GeneSearchPageDTO";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {GeneDTO} from "../domain/GeneDTO";
//import {GeneSubSequenceSearcherComponent} from "../components/GeneSubSequenceSearcherComponent";
//import {SampleDTO} from "../domain/SampleDTO";

export class SubSequenceSearchPageState {
    public _geneSearcherPage: GeneSearchPageDTO;

    public constructor() {
        this._geneSearcherPage = new GeneSearchPageDTO();
        this._geneSearcherPage._geneSubSequenceResultFound = new Array<GeneSubsequenceResultDTO>();
        this._geneSearcherPage._geneTableResultHeaderColumns = new Array<TableHeaderColumnDTO>();
        this._geneSearcherPage._geneSubSequenceSearcher = new GeneSubSequenceSearcherDTO();

        this._geneSearcherPage._geneSubSequenceSearcher._geneList = new Array<GeneDTO>();
        this._geneSearcherPage._geneSubSequenceSearcher._dnaSequenceToFind = "";

        let singleHeader: TableHeaderColumnDTO;

        singleHeader = new TableHeaderColumnDTO();
        singleHeader._isKey = true;
        singleHeader._columnName = "Gen";
        //singleHeader._value = "Gen";
        singleHeader._width = "100";
        this._geneSearcherPage._geneTableResultHeaderColumns.push(singleHeader);

        singleHeader = new TableHeaderColumnDTO();
        singleHeader._isKey = false;
        singleHeader._columnName = "Result";
        //singleHeader._value = "Result";
        singleHeader._width = "100";
        this._geneSearcherPage._geneTableResultHeaderColumns.push(singleHeader);

        this._geneSearcherPage._showModalDialogSearchRequest = false;
    }
}

export function SubSequenceSearchPageReducer(state: SubSequenceSearchPageState = new SubSequenceSearchPageState(),
                                             action: Action): SubSequenceSearchPageState {

    let newState: SubSequenceSearchPageState;

    switch(action.type) {
        case ActionConstants.INITIALIZE_SUB_SEQUENCE_SEARCH_PAGE:
            let initialSubSequenceSearchPage: GeneSearchPageDTO;

            initialSubSequenceSearchPage = new GeneSearchPageDTO();
            initialSubSequenceSearchPage._geneSubSequenceResultFound = new Array<GeneSubsequenceResultDTO>();
            initialSubSequenceSearchPage._geneSubSequenceSearcher = new GeneSubSequenceSearcherDTO();
            initialSubSequenceSearchPage._geneTableResultHeaderColumns = new Array<TableHeaderColumnDTO>();

            initialSubSequenceSearchPage._geneSubSequenceSearcher._geneList = new Array<GeneDTO>();
            initialSubSequenceSearchPage._geneSubSequenceSearcher._dnaSequenceToFind = "";

            let singleHeader: TableHeaderColumnDTO;

            singleHeader = new TableHeaderColumnDTO();
            singleHeader._isKey = true;
            singleHeader._columnName = "_geneId";
            //singleHeader._value = "Gen";
            singleHeader._width = "100";
            initialSubSequenceSearchPage._geneTableResultHeaderColumns.push(singleHeader);

            singleHeader = new TableHeaderColumnDTO();
            singleHeader._isKey = false;
            singleHeader._columnName = "_haveSequence";
            //singleHeader._value = "Result";
            singleHeader._width = "100";
            initialSubSequenceSearchPage._geneTableResultHeaderColumns.push(singleHeader);

            let geneSubSequenceListFound: Array<GeneSubsequenceResultDTO>;
            let singleSequenceGene: GeneSubsequenceResultDTO;

            geneSubSequenceListFound = new Array<GeneSubsequenceResultDTO>();

            singleSequenceGene = new GeneSubsequenceResultDTO();
            singleSequenceGene._geneId = 234;
            singleSequenceGene._haveSequence = 1;
            initialSubSequenceSearchPage._geneSubSequenceResultFound.push(singleSequenceGene);

            singleSequenceGene = new GeneSubsequenceResultDTO();
            singleSequenceGene._geneId = 534;
            singleSequenceGene._haveSequence = 1;
            initialSubSequenceSearchPage._geneSubSequenceResultFound.push(singleSequenceGene);

            initialSubSequenceSearchPage._showModalDialogSearchRequest = false;

            newState = objectAssign({}, state, {_geneSearcherPage: initialSubSequenceSearchPage});
            return newState;

        case ActionConstants.SHOW_MODAL_DIALOG_SEARCH_REQUEST:
            let newPage = objectAssign({}, state._geneSearcherPage, {});

            newPage._showModalDialogSearchRequest = action['showModalDialog'];

            newState = objectAssign({}, state, {_geneSearcherPage: newPage});

            return newState;
        default: 
           return state;
    }
}