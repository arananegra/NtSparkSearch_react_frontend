import * as React from "react";
import {GeneSubSequenceSearcherComponent} from "../../components/SearcherBarComponents/GeneSubSequenceSearcherComponent";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {SubSequenceInDNATableResult} from "../../components/TableComponents/SubSequenceInDNATableResult";
import {GeneSearchPageDTO} from "../../domain/SearchPage/GeneSearchPageDTO";

import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {ModalRequestWithTextBoxComponent} from "../../components/CommonComponents/ModalRequestWithTextBoxComponent";

import {store} from "../../components/AppPipeline";
import {ShowModalDialogSearchRequestAction} from "../../actions/SubSequenceSearchActions/ShowModalDialogSearchRequestAction";
import {Constants} from "../../common/Constants";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {GeneDTO} from "../../domain/GeneDTO";

export interface ISubSequenceSearchPageProps {
    geneSearcherPage: GeneSearchPageDTO;
    intl?: any;
}

export interface ISubSequenceSearchPageDispatchProps {
    initializeSubSequenceGeneListFound: () => any;
    onSequenceInputTextBox: (sequenceToFetch) => any;
    onGenesInputTexBox: (genesToFetch) => any;
}


export interface ISubSequenceSearchPageState {

}

export class SubSequenceSearchPage extends React.Component<ISubSequenceSearchPageProps & ISubSequenceSearchPageDispatchProps & InjectedIntlProps, ISubSequenceSearchPageState> {
    public constructor(props: ISubSequenceSearchPageProps & ISubSequenceSearchPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    public componentWillMount() {
        this.props.initializeSubSequenceGeneListFound();
    }

    private onDnaSubSequenceUserInput(event: object, newValue: string) {
        this.props.onSequenceInputTextBox(newValue);
    }

    private onGenesUserInput(event: object, newValue: string) {
        this.props.onGenesInputTexBox(newValue);
    }

    private manageOnClickModal(option: any) {
        let showModal: boolean;

        console.log("WTF!: ", option);

        showModal = false;

        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = true;
        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogSearchRequestAction(
            showModal
        ));
    }

    private onSearch(event) {
        store.dispatch(ShowModalDialogSearchRequestAction(
            true
        ));
    }

    // private genListPrinter(genList: Array<GeneDTO>) :string {
    //     this.props.geneSearcherPage._geneSubSequenceSearcher._geneListText = genList;
    //     return "hola";
    // }


    public render() {
        return (
            <div className="container-fluid">
                <CSSTransitionGroup
                    transitionName="subsequence-search-page-transition"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <div className="row gene-searcher-component">
                        <GeneSubSequenceSearcherComponent
                            onChangeTextSequence={this.onDnaSubSequenceUserInput.bind(this)}
                            onChangeTextGenes={this.onGenesUserInput.bind(this)}
                            dnaSubSequenceNameHintText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_HINT_TEXT})}
                            dnaSubSequenceFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_FLOATING_TEXT})}
                            dnaGenesToSearchHintText={this.props.intl.formatMessage({id: MessagesConstants.GENES_PATTERN})}
                            dnaGenesToSearchFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.GENES})}
                            buttonSearchLabel={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                            buttonSearchValue={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                            onSearchButtonPressed={this.onSearch.bind(this)}
                            dnaSubSequenceToFetch={this.props.geneSearcherPage._geneSubSequenceSearcher._dnaSequenceToFind}
                            dnaGenesToSearch={this.props.geneSearcherPage._geneSubSequenceSearcher._geneListText}
                        />
                        <ModalRequestWithTextBoxComponent
                            showDialog={this.props.geneSearcherPage._showModalDialogSearchRequest}
                            onClick={this.manageOnClickModal.bind(this)}
                            dialogTitle={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TITTLE_SUB_SEQ_SEARCH})}
                            dialogText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TEXT_SUB_SEQ_SEARCH})}
                            floatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_EMAIL_FLOATING_LABEL_TEXT})}
                            hintText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_EMAIL_HINT_TEXT})}
                            acceptButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_ACCEPT_BUTTON})}
                            cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}/>
                    </div>
                    <div className="row gene-result-component">
                        <SubSequenceInDNATableResult
                            columnList={this.props.geneSearcherPage._geneTableResultHeaderColumns}
                            dataList={this.props.geneSearcherPage._geneSubSequenceResultFound}
                            intl={this.props.intl}
                            noDataText={this.props.intl.formatMessage({id: MessagesConstants.NO_DATA_TO_SHOW})}/>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}