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
import Spinner from 'react-spinner-children';
import {DownloadGenesDirectSearchAction} from "../../actions/SubSequenceSearchActions/DownloadGenesDirectSearchAction";
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ShowSnackBarDownloadDirectSearchAction} from "../../actions/SubSequenceSearchActions/ShowSnackBarDownloadDirectSearchAction";

export interface ISubSequenceSearchPageProps {
    geneSearcherPage: GeneSearchPageDTO;
    intl?: any;
}

export interface ISubSequenceSearchPageDispatchProps {
    initializeSubSequenceGeneListFound: () => any;
    onSequenceInputTextBox: (sequenceToFetch) => any;
    onGenesInputTexBox: (genesToFetch) => any;
    onSearchButtonPressed: (sequenceToFetch, genesToFetch) => any;
    onEmailTextBox: (email) => any;
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

    private manageEmailTextBox(event: object, newValue: string) {
        this.props.onEmailTextBox(newValue);
    }

    private manageOnClickModal(option: any) {
        let showModal: boolean;
        showModal = false;

        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = false;
            store.dispatch(ShowSnackBarDownloadDirectSearchAction(true));
            store.dispatch(DownloadGenesDirectSearchAction(this.props.geneSearcherPage._geneSubSequenceSearcher._geneListArray,
                this.props.geneSearcherPage._emailToDownloadFromDirect))
        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogSearchRequestAction(
            showModal
        ));
    }

    private manageDirectDownloadSnackBarClose() {
        store.dispatch(ShowSnackBarDownloadDirectSearchAction(false));
    }

    private onSearch(event) {
        this.props.onSearchButtonPressed(this.props.geneSearcherPage._geneSubSequenceSearcher._dnaSequenceToFind, this.props.geneSearcherPage._geneSubSequenceSearcher._geneListArray);
    }

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
                            cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}
                            onChangeText={this.manageEmailTextBox.bind(this)}/>
                        <MuiThemeProvider>
                            <Snackbar
                                open={this.props.geneSearcherPage._showSnackBarDirectDownloadStarted}
                                message={this.props.intl.formatMessage({id: MessagesConstants.SNACKBAR_DIRECT_DOWNLOAD_STARTED})}
                                autoHideDuration={4000}
                                onRequestClose={this.manageDirectDownloadSnackBarClose.bind(this)}
                            />
                        </MuiThemeProvider>
                    </div>
                    <div className="row gene-result-component">
                        <Spinner loaded={this.props.geneSearcherPage._loaded}>
                            <SubSequenceInDNATableResult
                                columnList={this.props.geneSearcherPage._geneTableResultHeaderColumns}
                                dataList={this.props.geneSearcherPage._geneSubSequenceResultFound}
                                intl={this.props.intl}
                                noDataText={this.props.intl.formatMessage({id: MessagesConstants.NO_DATA_TO_SHOW})}/>
                        </Spinner>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}