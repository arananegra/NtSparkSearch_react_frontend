import * as React from "react";
import {UploadFastaExcelComponent} from "../components/UploadFastaExcelComponent";
import {NavigationBarComponent} from "../components/NavigationBarComponent";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";

export interface IDownloadPageProps {
    onSearchButtonPressedDownloadExcel?: (value) => any;
    onSearchButtonPressedDownloadFasta?: (value) => any;
}

export interface IDownloadPagePageState {

}

export class DownloadPage extends React.Component<IDownloadPageProps, IDownloadPagePageState> {
    public constructor(props: IDownloadPageProps) {
        super(props);
    }

    public componentWillMount() {

    }

    public render() {
        return (
            <div className="container-fluid">
                <div>
                    <NavigationBarComponent/>
                </div>
                <div className="header-separtion-download-page">
                    <div className="col-md-6 well">
                        <h2 className="h2-download-style">
                            <FormattedMessage
                                id={MessagesConstants.UPLOAD_TEXT_EXCEL}/>
                        </h2>
                        <MuiThemeProvider>
                            <RaisedButton className="row download-button"
                                          label={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_EXCEL}/>}
                                          value={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_EXCEL}/>}
                                          primary={true}
                                          onClick={this.props.onSearchButtonPressedDownloadExcel}/>
                        </MuiThemeProvider>
                    </div>
                </div>

                <div className="header-separtion-download-page">
                    <div className="col-md-6 well">
                        <h2 className="h2-download-style">
                            <FormattedMessage
                                id={MessagesConstants.UPLOAD_TEXT_FASTA}/>
                        </h2>
                        <MuiThemeProvider>
                            <RaisedButton className="row download-button"
                                          label={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_FASTA}/>}
                                          value={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_FASTA}/>}
                                          primary={true}
                                          onClick={this.props.onSearchButtonPressedDownloadFasta}/>
                        </MuiThemeProvider>
                    </div>
                </div>

            </div>
        );
    }
}