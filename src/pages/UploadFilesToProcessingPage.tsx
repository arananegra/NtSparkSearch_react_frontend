import * as React from "react";
import {UploadFastaExcelComponent} from "../components/UploadFastaExcelComponent";
import {NavigationBarComponent} from "../components/NavigationBarComponent";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";

export interface IUploadFilesToProcessingPageProps {
    onClickRenewTextApi: () => any;
    textFromApiCall: string;
}

export interface IUploadFilesToProcessingPageState {

}

export class UploadFilesToProcessingPage extends React.Component<IUploadFilesToProcessingPageProps, IUploadFilesToProcessingPageState> {
    public constructor(props: IUploadFilesToProcessingPageProps) {
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
                <CSSTransitionGroup
                    transitionName="subsequence-search-page-transition"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <div>
                        <UploadFastaExcelComponent/>
                    </div>
                </CSSTransitionGroup>
                <div>
                    <MuiThemeProvider>
                        <RaisedButton className="row upload-button"
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