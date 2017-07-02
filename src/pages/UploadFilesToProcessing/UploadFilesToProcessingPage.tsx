import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {FormattedMessage} from "react-intl";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {RowComponent} from "../../components/CommonComponents/RowComponent";
import {ModalRequestWithTextBoxComponent} from "../../components/CommonComponents/ModalRequestWithTextBoxComponent";
import {UploadFilesToProcessingPageDTO} from "../../domain/UploadPage/UploadFilesToProcessingPageDTO";
import {Constants} from "../../common/Constants";
import Snackbar from 'material-ui/Snackbar';
import {store} from "../../components/AppPipeline";
import {ShowModalDialogUploadExcelAction} from "../../actions/UploadActions/ShowModalDialogUploadExcelAction";
import {ModalRequestWithTextBoxAndUploadButton} from "../../components/CommonComponents/ModalRequestWithTextBoxAndUploadButton";
import {ShowModalDialogUploadFastaAction} from "../../actions/UploadActions/ShowModalDialogUploadFastaAction";
import {ShowSnackBarUploadExcelAction} from "../../actions/UploadActions/ShowSnackBarUploadExcelAction";
import {ModalRequestWithUploadButton} from "../../components/CommonComponents/ModalRequestWithUploadButton";
import {ShowSnackBarUploadFastaAction} from "../../actions/UploadActions/ShowSnackBarUploadFastaAction";

export interface IUploadFilesToProcessingPageProps {
    UploadFilesToProcessingPage: UploadFilesToProcessingPageDTO;
    intl?: any
}

export interface IUploadFilesToProcessingPageDispatchProps {
    onExcelFileUpload: (file) => any;
    onFastaFileUpload: (file) => any;
}

export interface IUploadFilesToProcessingPageState {

}

export class UploadFilesToProcessingPage extends React.Component<IUploadFilesToProcessingPageProps & IUploadFilesToProcessingPageDispatchProps & InjectedIntlProps, IUploadFilesToProcessingPageState> {
    public constructor(props: IUploadFilesToProcessingPageProps & IUploadFilesToProcessingPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    private manageOnClickModalUploadExcel(option: any) {
        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            store.dispatch(ShowSnackBarUploadExcelAction(
                true
            ));
            store.dispatch(ShowModalDialogUploadExcelAction(
                false
            ));

        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            store.dispatch(ShowModalDialogUploadExcelAction(
                false
            ));
        }
    }

    private manageOnClickModalUploadFasta(option: any) {
        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            store.dispatch(ShowSnackBarUploadFastaAction(
                true
            ));
            store.dispatch(ShowModalDialogUploadFastaAction(
                false
            ));

        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            store.dispatch(ShowModalDialogUploadFastaAction(
                false
            ));
        }
    }

    private onClickUploadExcel(event) {
        store.dispatch(ShowModalDialogUploadExcelAction(
            true
        ));
    }

    private onClickUploadFasta(event) {
        store.dispatch(ShowModalDialogUploadFastaAction(
            true
        ));
    }

    private manageSnackBarUploadedExcel() {
        store.dispatch(ShowSnackBarUploadExcelAction(false));
    }

    private manageSnackBarUploadedFasta() {
        store.dispatch(ShowSnackBarUploadFastaAction(false));
    }

    private textFromExcelInputTextBox(newEmailText: string) {
        console.log(newEmailText);
    }

    private excelFileReceiver(event) {
        event.preventDefault();
        let data = new FormData();
        data.append('file', event.target.files[0]);
        this.props.onExcelFileUpload(data);
        store.dispatch(ShowModalDialogUploadExcelAction(
            false
        ));
    }

    private fastaFileReceiver(event) {
        event.preventDefault();
        let data = new FormData();
        data.append('file', event.target.files[0]);
        this.props.onFastaFileUpload(data);
        store.dispatch(ShowModalDialogUploadFastaAction(
            false
        ));
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
                    <div>
                        <div className="container-fluid header-separtion-upload-page">
                            <RowComponent
                                headerText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_TEXT_EXCEL})}
                                buttonText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_BUTTON_EXCEL})}
                                onButtonPressed={this.onClickUploadExcel.bind(this)}/>
                            <ModalRequestWithTextBoxAndUploadButton
                                onInputTextChange={this.textFromExcelInputTextBox.bind(this)}
                                showDialog={this.props.UploadFilesToProcessingPage._showModalDialogUploadExcel}
                                onClick={this.manageOnClickModalUploadExcel.bind(this)}
                                onFileUpload={this.excelFileReceiver.bind(this)}
                                dialogTitle={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TITTLE_UPLOAD_EXCEL})}
                                dialogText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TEXT_UPLOAD_EXCEL})}
                                floatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_EMAIL_FLOATING_LABEL_TEXT})}
                                hintText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_EMAIL_HINT_TEXT})}
                                acceptButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_ACCEPT_BUTTON})}
                                cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}/>
                            <MuiThemeProvider>
                                <Snackbar
                                    open={this.props.UploadFilesToProcessingPage._showSnackBarUploadExcelSucces}
                                    message={this.props.intl.formatMessage({id: MessagesConstants.SNACKBAR_UPLOADED_EXCEL_TEXT})}
                                    autoHideDuration={4000}
                                    onRequestClose={this.manageSnackBarUploadedExcel.bind(this)}
                                />
                            </MuiThemeProvider>
                        </div>

                        <div className="container-fluid header-separtion-upload-page">
                            <RowComponent
                                headerText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_TEXT_FASTA})}
                                buttonText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_BUTTON_FASTA})}
                                onButtonPressed={this.onClickUploadFasta.bind(this)}/>
                            <ModalRequestWithUploadButton
                                showDialog={this.props.UploadFilesToProcessingPage._showModalDialogFasta}
                                onClick={this.manageOnClickModalUploadFasta.bind(this)}
                                onFileUpload={this.fastaFileReceiver.bind(this)}
                                dialogTitle={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TITTLE_UPLOAD_FASTA})}
                                dialogText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TEXT_UPLOAD_FASTA})}
                                acceptButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_ACCEPT_BUTTON})}
                                cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}/>
                            <MuiThemeProvider>
                                <Snackbar
                                    open={this.props.UploadFilesToProcessingPage._showSnackBarUploadFastaSucces}
                                    message={this.props.intl.formatMessage({id: MessagesConstants.SNACKBAR_UPLOADED_FASTA_TEXT})}
                                    autoHideDuration={4000}
                                    onRequestClose={this.manageSnackBarUploadedFasta.bind(this)}
                                />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}