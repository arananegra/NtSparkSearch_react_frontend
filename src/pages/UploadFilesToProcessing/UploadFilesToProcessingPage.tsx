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
import {store} from "../../components/AppPipeline";
import {ShowModalDialogUploadExcelAction} from "../../actions/UploadActions/ShowModalDialogUploadExcelAction";
import {ModalRequestWithTextBoxAndUploadButton} from "../../components/CommonComponents/ModalRequestWithTextBoxAndUploadButton";

export interface IUploadFilesToProcessingPageProps {
    UploadFilesToProcessingPage: UploadFilesToProcessingPageDTO;
    textFromApiCall: string;
    intl?: any
}

export interface IUploadFilesToProcessingPageDispatchProps {
    onSearchButtonPressedUploadExcel?: (value) => any;
    onSearchButtonPressedUploadFasta?: (value) => any;
    onClickRenewTextApi: () => any;
}

export interface IUploadFilesToProcessingPageState {

}

export class UploadFilesToProcessingPage extends React.Component<IUploadFilesToProcessingPageProps & IUploadFilesToProcessingPageDispatchProps & InjectedIntlProps, IUploadFilesToProcessingPageState> {
    public constructor(props: IUploadFilesToProcessingPageProps & IUploadFilesToProcessingPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    public componentWillMount() {

    }

    private manageOnClickModalUploadExcel(option: any) {
        let showModal: boolean;
        console.log("WTF: ", option);

        showModal = false;
        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = false;

        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogUploadExcelAction(
            showModal
        ));
    }

    private onSearch(event) {
        store.dispatch(ShowModalDialogUploadExcelAction(
            true
        ));
    }

    private textFromInputTextBox(newEmailText: string) {
        console.log(newEmailText);
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
                                onButtonPressed={this.onSearch.bind(this)}/>
                            <ModalRequestWithTextBoxAndUploadButton
                                onInputTextChange={this.textFromInputTextBox.bind(this)}
                                showDialog={this.props.UploadFilesToProcessingPage._showModalDialogUploadExcel}
                                onClick={this.manageOnClickModalUploadExcel.bind(this)}
                                dialogTitle={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TITTLE_UPLOAD_EXCEL})}
                                dialogText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_TEXT_UPLOAD_EXCEL})}
                                floatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_EMAIL_FLOATING_LABEL_TEXT})}
                                hintText={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_EMAIL_HINT_TEXT})}
                                acceptButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_ACCEPT_BUTTON})}
                                cancelButtonLabel={this.props.intl.formatMessage({id: MessagesConstants.DIALOG_CANCEL_BUTTON})}/>
                        </div>

                        <div className="container-fluid header-separtion-upload-page">
                            <RowComponent
                                headerText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_TEXT_FASTA})}
                                buttonText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_BUTTON_FASTA})}
                                onButtonPressed={this.props.onSearchButtonPressedUploadExcel}/>
                        </div>
                    </div>
                </CSSTransitionGroup>
                <div>
                    <MuiThemeProvider>
                        <RaisedButton className="row row-button"
                                      label="Boton de prueba"
                                      value="Boton de prueba"
                                      primary={true}
                                      onClick={this.props.onClickRenewTextApi}/>
                    </MuiThemeProvider>
                    <label>{this.props.textFromApiCall}</label>

                </div>
            </div>
        );
    }
}