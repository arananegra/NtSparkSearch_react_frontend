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

        this._geneSearcherPage._geneSubSequenceSearcher._geneListText = "";
        this._geneSearcherPage._geneSubSequenceSearcher._dnaSequenceToFind = "";
        this._geneSearcherPage._geneSubSequenceSearcher._geneListArray = new Array<GeneDTO>();

        this._geneSearcherPage._loaded = true;
        this._geneSearcherPage._emailToDownloadFromDirect = "";

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

            newState = objectAssign({}, state, {_geneSearcherPage: initialSubSequenceSearchPage});
            return newState;

        case ActionConstants.SHOW_MODAL_DIALOG_SEARCH_REQUEST:
            let newPage = objectAssign({}, state._geneSearcherPage, {});

            newPage._showModalDialogSearchRequest = action['showModalDialog'];

            newState = objectAssign({}, state, {_geneSearcherPage: newPage});

            return newState;

        case ActionConstants.WRITE_SEQUENCE_TO_FETCH_ON_DIRECT_SEARCH_INPUT_TEXT:
            let newPageWithNewSequenceToFetch = objectAssign({}, state._geneSearcherPage, {});
            let newInputFromTextBoxWithSequence: string = action["textFromInputTextBox"];
            console.log(newInputFromTextBoxWithSequence);
            const ambiguousNucleotidesRegExp = new RegExp('^$|[ACGTMRWSYKVHDBXN]');

            let lastNewCharacterInSequence: string = newInputFromTextBoxWithSequence.slice(-1);

            if (ambiguousNucleotidesRegExp.test(lastNewCharacterInSequence) == true) {
                newPageWithNewSequenceToFetch._geneSubSequenceSearcher._dnaSequenceToFind = newInputFromTextBoxWithSequence;
            }
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithNewSequenceToFetch});
            return newState;

        case ActionConstants.SPINNER_DIRECT_STATE_CHANGE:
            let newPageWithSpinnerState = objectAssign({}, state._geneSearcherPage, {});
            newPageWithSpinnerState._loaded = action["spinnerStateLoaded"];
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithSpinnerState});
            return newState;

        case ActionConstants.WRITE_GENES_TO_FETCH_ON_DIRECT_SEARCH_INPUT_TEXT:
            let newPageWithGenesToFetch = objectAssign({}, state._geneSearcherPage, {});
            let newInputFromTextBoxWithGenes: string = action["textFromInputTextBox"];

            const genesListRegularExpression = new RegExp('^$|[0-9,]+');

            let lastNewCharacterInGenes: string = newInputFromTextBoxWithGenes.slice(-1);

            if (genesListRegularExpression.test(lastNewCharacterInGenes) == true) {
                newPageWithGenesToFetch._geneSubSequenceSearcher._geneListText = newInputFromTextBoxWithGenes;
                let stringArrayOfGenes = new Array<string>();
                stringArrayOfGenes = newInputFromTextBoxWithGenes.split(",");

                let arrayOfGenesDTOs = new Array<GeneDTO>();
                for (let stringGen of stringArrayOfGenes) {
                    let geneDTO = new GeneDTO();
                    geneDTO._gene_id = stringGen;
                    arrayOfGenesDTOs.push(geneDTO);
                }
                newPageWithGenesToFetch._geneSubSequenceSearcher._geneListArray = arrayOfGenesDTOs;
            }
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithGenesToFetch});
            return newState;

        case ActionConstants.BUILD_JSON_WITH_GENES_TO_DIRECT:
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

        case ActionConstants.WRITE_EMAIL_DIRECT_SEARCH:
            let newPageWithEmail = objectAssign({}, state._geneSearcherPage, {});
            let email: string = action["textFromInputTextBox"];
            newPageWithEmail._emailToDownloadFromDirect = email;

            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithEmail});
            return newState;

        default:
            return state;
    }
}