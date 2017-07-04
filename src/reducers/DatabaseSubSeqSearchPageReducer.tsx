import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {GeneSearchPageDTO} from "../domain/SearchPage/GeneSearchPageDTO";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {GeneDTO} from "../domain/GeneDTO";

export class DatabaseSubSeqSearchPageState {
    public _geneSearcherPage: GeneSearchPageDTO;

    public constructor() {
        this._geneSearcherPage = new GeneSearchPageDTO();
        this._geneSearcherPage._geneSubSequenceResultFound = new Array<GeneSubsequenceResultDTO>();
        this._geneSearcherPage._geneTableResultHeaderColumns = new Array<TableHeaderColumnDTO>();
        this._geneSearcherPage._geneSubSequenceSearcher = new GeneSubSequenceSearcherDTO();

        this._geneSearcherPage._geneSubSequenceSearcher._geneListText = "";
        this._geneSearcherPage._geneSubSequenceSearcher._dnaSequenceToFind = "";
        this._geneSearcherPage._geneSubSequenceSearcher._geneListArray = new Array<GeneDTO>();

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
    }
}

export function DatabaseSubSeqSearchPageReducer(state: DatabaseSubSeqSearchPageState = new DatabaseSubSeqSearchPageState(),
                                                action: Action): DatabaseSubSeqSearchPageState {

    let newState: DatabaseSubSeqSearchPageState;

    switch (action.type) {
        case ActionConstants.INITIALIZE_DATABASE_SUB_SEQUENCE_SEARCH_PAGE:
            let initialDatabaseSubSeqSearchPage: GeneSearchPageDTO;

            initialDatabaseSubSeqSearchPage = objectAssign({}, state._geneSearcherPage, {});

            // initialDatabaseSubSeqSearchPage = new GeneSearchPageDTO();
            // initialDatabaseSubSeqSearchPage._geneSubSequenceResultFound = new Array<GeneSubsequenceResultDTO>();
            // initialDatabaseSubSeqSearchPage._geneSubSequenceSearcher = new GeneSubSequenceSearcherDTO();
            // initialDatabaseSubSeqSearchPage._geneTableResultHeaderColumns = new Array<TableHeaderColumnDTO>();
            //
            // initialDatabaseSubSeqSearchPage._geneSubSequenceSearcher._geneListText = new Array<GeneDTO>();
            // initialDatabaseSubSeqSearchPage._geneSubSequenceSearcher._dnaSequenceToFind = "";
            //
            // let singleHeader: TableHeaderColumnDTO;
            //
            // singleHeader = new TableHeaderColumnDTO();
            // singleHeader._isKey = true;
            // singleHeader._columnName = "_geneId";
            // //singleHeader._value = "Gen";
            // singleHeader._width = "100";
            // initialDatabaseSubSeqSearchPage._geneTableResultHeaderColumns.push(singleHeader);
            //
            // singleHeader = new TableHeaderColumnDTO();
            // singleHeader._isKey = false;
            // singleHeader._columnName = "_haveSequence";
            // //singleHeader._value = "Result";
            //
            // singleHeader._width = "100";
            // initialDatabaseSubSeqSearchPage._geneTableResultHeaderColumns.push(singleHeader);
            //
            // let geneSubSequenceListFound: Array<GeneSubsequenceResultDTO>;
            // let singleSequenceGene: GeneSubsequenceResultDTO;
            //
            // geneSubSequenceListFound = new Array<GeneSubsequenceResultDTO>();
            //
            // // singleSequenceGene = new GeneSubsequenceResultDTO();
            // // singleSequenceGene._geneId = 234;
            // // singleSequenceGene._haveSequence = 1;
            // // initialDatabaseSubSeqSearchPage._geneSubSequenceResultFound.push(singleSequenceGene);
            // //
            // // singleSequenceGene = new GeneSubsequenceResultDTO();
            // // singleSequenceGene._geneId = 534;
            // // singleSequenceGene._haveSequence = 1;
            // // initialDatabaseSubSeqSearchPage._geneSubSequenceResultFound.push(singleSequenceGene);

            initialDatabaseSubSeqSearchPage._showModalDialogSearchRequest = false;
            newState = objectAssign({}, state, {_geneSearcherPage: initialDatabaseSubSeqSearchPage});
            return newState;

        case ActionConstants.WRITE_SEQUENCE_TO_FETCH_ON_DATABASE_SEARCH_INPUT_TEXT:
            let newPageWithDatabaseSequenceToFetch = objectAssign({}, state._geneSearcherPage, {});
            let newInputFromTextBox: string = action["textFromInputTextBox"];

            const re = new RegExp('^$|[ACGTMRWSYKVHDBXN]');

            let lastNewCharacter: string = newInputFromTextBox.slice(-1);

            if (re.test(lastNewCharacter) == true) {
                newPageWithDatabaseSequenceToFetch._geneSubSequenceSearcher._dnaSequenceToFind = newInputFromTextBox;
            }
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithDatabaseSequenceToFetch});
            return newState;
    }
    return state;
}