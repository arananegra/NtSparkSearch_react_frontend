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
            // initialSubSequenceSearchPage._geneSubSequenceSearcher._geneListText = new Array<GeneDTO>();
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
            let newInputFromTextBoxWithSequence: string = action["textFromInputTextBox"];

            const ambiguousNucleotidesRegExp = new RegExp('^$|[ACGTMRWSYKVHDBXN]');

            let lastNewCharacterInSequence: string = newInputFromTextBoxWithSequence.slice(-1);

            if (ambiguousNucleotidesRegExp.test(lastNewCharacterInSequence) == true) {
                newPageWithNewSequenceToFetch._geneSubSequenceSearcher._dnaSequenceToFind = newInputFromTextBoxWithSequence;
            }
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithNewSequenceToFetch});
            return newState;

        case ActionConstants.WRITE_GENES_TO_FETCH_ON_DIRECT_SEARCH_INPUT_TEXT:
            let newPageWithGenesToFetch = objectAssign({}, state._geneSearcherPage, {});
            let newInputFromTextBoxWithGenes: string = action["textFromInputTextBox"];

            const genesListRegularExpression = new RegExp('^$|[0-9,](?!.*[\,]{2}).*$');

            let lastNewCharacterInGenes: string = newInputFromTextBoxWithGenes.slice(-1);

            if (genesListRegularExpression.test(lastNewCharacterInGenes) == true) {

                let geneStringList: Array<string> = newInputFromTextBoxWithGenes.split(",");
                console.log("",geneStringList);

                let geneDTOList = Array<GeneDTO>();

                geneStringList.map(geneString => {
                    console.log("",geneString);
                    let geneDTO = new GeneDTO();
                    geneDTO._id = geneString;
                    console.log("",geneDTO);
                    geneDTOList.push(geneDTO);
                });

                newPageWithGenesToFetch._geneSubSequenceSearcher._geneListText = geneDTOList;
            }
            newState = objectAssign({}, state, {_geneSearcherPage: newPageWithGenesToFetch});


            return newState;

        default:
            return state;
    }
}