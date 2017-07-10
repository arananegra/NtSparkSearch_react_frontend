import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {GeneSearchPageDTO} from "../domain/SearchPage/GeneSearchPageDTO";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {GeneDTO} from "../domain/GeneDTO";
import entries = require("core-js/fn/array/entries");

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

        this._geneSearcherPage._loaded = true;

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

export function DatabaseSubSeqSearchPageReducer(state: DatabaseSubSeqSearchPageState = new DatabaseSubSeqSearchPageState(),
                                                action: Action): DatabaseSubSeqSearchPageState {

    let newState: DatabaseSubSeqSearchPageState;

    switch (action.type) {
        case ActionConstants.INITIALIZE_DATABASE_SUB_SEQUENCE_SEARCH_PAGE:
            let initialDatabaseSearchPage: DatabaseSubSeqSearchPageState;
            initialDatabaseSearchPage = objectAssign({}, state, {});
            initialDatabaseSearchPage = new DatabaseSubSeqSearchPageState();

            let initialDatabaseSearchPageGeneDTO = initialDatabaseSearchPage._geneSearcherPage;

            newState = objectAssign({}, state, {_geneSearcherPage: initialDatabaseSearchPageGeneDTO});
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

        case ActionConstants.SPINNER_DATABASE_STATE_CHANGE:
            let newPageWithSpinnerState = objectAssign({}, state._geneSearcherPage, {});
            newPageWithSpinnerState._loaded = action["spinnerStateLoaded"];
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithSpinnerState});
            return newState;

        case ActionConstants.BUILD_JSON_WITH_GENES_TO_DATABASE:
            let newPageWithGenesToTable = objectAssign({}, state._geneSearcherPage, {});
            let newGenesInJson: any = action["jsonWithGenes"];

            let geneSubSequenceListFound: Array<GeneSubsequenceResultDTO>;
            let singleSequenceGene: GeneSubsequenceResultDTO;

            geneSubSequenceListFound = new Array<GeneSubsequenceResultDTO>();

            for (let key in newGenesInJson) {
                if (newGenesInJson.hasOwnProperty(key)) {
                    singleSequenceGene = new GeneSubsequenceResultDTO();
                    singleSequenceGene._geneId = key;
                    if (newGenesInJson[key] === 1) {
                        singleSequenceGene._haveSequence = "+"
                    }

                    else {
                        singleSequenceGene._haveSequence = "-"
                    }
                    // singleSequenceGene._haveSequence = newGenesInJson[key];
                    geneSubSequenceListFound.push(singleSequenceGene);
                }
            }
            newPageWithGenesToTable._geneSubSequenceResultFound = geneSubSequenceListFound;
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithGenesToTable});
            return newState;
    }
    return state;
}