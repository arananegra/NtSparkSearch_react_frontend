import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";

export interface IUploadFastaExcelComponentProps {
    onSearchButtonPressedUploadExcel?: (value) => any;
    onSearchButtonPressedUploadFasta?: (value) => any;
}

export interface IUploadFastaExcelComponentState {

}

export class UploadFastaExcelComponent extends React.Component<IUploadFastaExcelComponentProps, IUploadFastaExcelComponentState> {
    public constructor(props: IUploadFastaExcelComponentProps) {
        super(props);
    }

    public componentWillMount() {

    }

    public render() {
        return (
            <div className="container-fluid">
                <div className="header-separtion">
                    <div className="well">
                        <h2>
                            Upload Excel File
                        </h2>
                        <MuiThemeProvider>
                            <RaisedButton className="row upload-button"
                                          label={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_EXCEL}/>}
                                          value={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_EXCEL}/>}
                                          primary={true}
                                          onClick={this.props.onSearchButtonPressedUploadExcel}/>
                        </MuiThemeProvider>
                    </div>
                </div>

                <div className="header-separtion">
                    <div className="well">
                        <h2>
                            Upload Fasta File
                        </h2>
                        <MuiThemeProvider>
                            <RaisedButton className="row upload-button"
                                          label={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_FASTA}/>}
                                          value={<FormattedMessage
                                              id={MessagesConstants.UPLOAD_BUTTON_FASTA}/>}
                                          primary={true}
                                          onClick={this.props.onSearchButtonPressedUploadFasta}/>
                        </MuiThemeProvider>
                    </div>
                </div>

            </div>
        );
    }
}