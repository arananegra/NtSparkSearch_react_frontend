import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {GeneSearchPageDTO} from "../domain/SearchPage/GeneSearchPageDTO";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {GeneDTO} from "../domain/GeneDTO";

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
        singleHeader._columnName = "_geneId";
        singleHeader._value = MessagesConstants.COLUMN_NAME;
        singleHeader._width = "100";
        this._geneSearcherPage._geneTableResultHeaderColumns.push(singleHeader);

        singleHeader = new TableHeaderColumnDTO();
        singleHeader._isKey = false;
        singleHeader._columnName = "_haveSequence";

        singleHeader._value = MessagesConstants.RESULT_COLUMN_NAME;
        singleHeader._width = "100";
        this._geneSearcherPage._geneTableResultHeaderColumns.push(singleHeader);

        this._geneSearcherPage._showModalDialogSearchRequest = false;
    }
}

export function SubSequenceSearchPageReducer(state: SubSequenceSearchPageState = new SubSequenceSearchPageState(),
                                             action: Action): SubSequenceSearchPageState {

    let newState: SubSequenceSearchPageState;

    switch (action.type) {
        case ActionConstants.INITIALIZE_SUB_SEQUENCE_SEARCH_PAGE:
            let initialSubSequenceSearchPage: GeneSearchPageDTO;

            initialSubSequenceSearchPage = objectAssign({}, state._geneSearcherPage, {});

            // initialSubSequenceSearchPage = new GeneSearchPageDTO();
            // initialSubSequenceSearchPage._geneSubSequenceResultFound = new Array<GeneSubsequenceResultDTO>();
            // initialSubSequenceSearchPage._geneSubSequenceSearcher = new GeneSubSequenceSearcherDTO();
            // initialSubSequenceSearchPage._geneTableResultHeaderColumns = new Array<TableHeaderColumnDTO>();
            //
            // initialSubSequenceSearchPage._geneSubSequenceSearcher._geneList = new Array<GeneDTO>();
            // initialSubSequenceSearchPage._geneSubSequenceSearcher._dnaSequenceToFind = "";
            //
            // let singleHeader: TableHeaderColumnDTO;
            //
            // singleHeader = new TableHeaderColumnDTO();
            // singleHeader._isKey = true;
            // singleHeader._columnName = "_geneId";
            // //singleHeader._value = "Gen";
            // singleHeader._width = "100";
            // initialSubSequenceSearchPage._geneTableResultHeaderColumns.push(singleHeader);
            //
            // singleHeader = new TableHeaderColumnDTO();
            // singleHeader._isKey = false;
            // singleHeader._columnName = "_haveSequence";
            // //singleHeader._value = "Result";
            //
            // singleHeader._width = "100";
            // initialSubSequenceSearchPage._geneTableResultHeaderColumns.push(singleHeader);
            //
            // let geneSubSequenceListFound: Array<GeneSubsequenceResultDTO>;
            // let singleSequenceGene: GeneSubsequenceResultDTO;
            //
            // geneSubSequenceListFound = new Array<GeneSubsequenceResultDTO>();
            //
            // // singleSequenceGene = new GeneSubsequenceResultDTO();
            // // singleSequenceGene._geneId = 234;
            // // singleSequenceGene._haveSequence = 1;
            // // initialSubSequenceSearchPage._geneSubSequenceResultFound.push(singleSequenceGene);
            // //
            // // singleSequenceGene = new GeneSubsequenceResultDTO();
            // // singleSequenceGene._geneId = 534;
            // // singleSequenceGene._haveSequence = 1;
            // // initialSubSequenceSearchPage._geneSubSequenceResultFound.push(singleSequenceGene);

            initialSubSequenceSearchPage._showModalDialogSearchRequest = false;

            newState = objectAssign({}, state, {_geneSearcherPage: initialSubSequenceSearchPage});
            return newState;

        case ActionConstants.SHOW_MODAL_DIALOG_SEARCH_REQUEST:
            let newPage = objectAssign({}, state._geneSearcherPage, {});

            newPage._showModalDialogSearchRequest = action['showModalDialog'];

            newState = objectAssign({}, state, {_geneSearcherPage: newPage});

            return newState;

        case ActionConstants.WRITE_SEQUENCE_TO_FETCH_ON_DIRECT_SEARCH_INPUT_TEXT:
            let newPageWithNewSequenceToFetch = objectAssign({}, state._geneSearcherPage, {});
            let newInputFromTextBox: string = action["textFromInputTextBox"];

            const re = new RegExp('^$|[ACGTMRWSYKVHDBXN]');

            let lastNewCharacter :string = newInputFromTextBox.slice(-1);

            if (re.test(lastNewCharacter)== true) {
                newPageWithNewSequenceToFetch._geneSubSequenceSearcher._dnaSequenceToFind = newInputFromTextBox;
            }
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithNewSequenceToFetch});
            return newState;

        default:
            return state;
    }
}