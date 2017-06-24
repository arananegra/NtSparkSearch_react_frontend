import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";
import {OneFullRowComponent} from "./OneFullRowComponent";

export interface IUploadFastaExcelComponentProps {
    onSearchButtonPressedUploadExcel?: (value) => any;
    onSearchButtonPressedUploadFasta?: (value) => any;
    intl: any
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
            <div>
                <div className="container-fluid header-separtion-upload-page">
                    <OneFullRowComponent
                        headerText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_TEXT_EXCEL})}
                        buttonText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_BUTTON_EXCEL})}
                        onButtonPressed={this.props.onSearchButtonPressedUploadExcel}/>
                </div>

                <div className="container-fluid header-separtion-upload-page">
                    <OneFullRowComponent
                        headerText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_TEXT_FASTA})}
                        buttonText={this.props.intl.formatMessage({id: MessagesConstants.UPLOAD_BUTTON_FASTA})}
                        onButtonPressed={this.props.onSearchButtonPressedUploadExcel}/>
                </div>
            </div>
        );
    }
}