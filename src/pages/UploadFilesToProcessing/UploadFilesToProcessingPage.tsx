import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {FormattedMessage} from "react-intl";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {RowComponent} from "../../components/CommonComponents/RowComponent";

export interface IUploadFilesToProcessingPageProps {
    onSearchButtonPressedUploadExcel?: (value) => any;
    onSearchButtonPressedUploadFasta?: (value) => any;
    textFromApiCall: string;
    intl?: any
}

export interface IUploadFilesToProcessingPageDispatchProps {
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
                                onButtonPressed={this.props.onSearchButtonPressedUploadExcel}/>
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