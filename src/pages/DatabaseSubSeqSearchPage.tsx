import * as React from "react";
import {UploadFastaExcelComponent} from "../components/UploadFastaExcelComponent";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";

export interface IDatabaseSubSeqSearchPageProps {
    onClickRenewTextApi: () => any;
    textFromApiCall: string;
}

export interface IDatabaseSubSeqSearchPageState {

}

export class DatabaseSubSeqSearchPage extends React.Component<IDatabaseSubSeqSearchPageProps, IDatabaseSubSeqSearchPageState> {
    public constructor(props: IDatabaseSubSeqSearchPageProps) {
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
                    <span>Database search</span>
                </CSSTransitionGroup>
            </div>
        );
    }
}