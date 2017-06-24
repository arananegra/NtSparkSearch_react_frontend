import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";

export interface IDownloadRowProps {
    onSearchButtonPressedDownloadExcel: (value) => any;
    onSearchButtonPressedDownloadFasta: (value) => any;

    textToLabelFirstItemInRow: FormattedMessage,
    textToButtonFirstItemInRow: FormattedMessage

    textToLabelSecondItemInRow: string,
    textToButtonSecondItemInRow: string
}

export interface IDownloadPagePageState {

}

export class DownloadRowComponent extends React.Component<IDownloadRowProps, IDownloadPagePageState> {
    public constructor(props: IDownloadRowProps) {
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
                    <div className="header-separtion-download-page">
                        <div className="col-md-6 well">
                            <h2>
                                {this.props.textToLabelFirstItemInRow}
                            </h2>
                            <MuiThemeProvider>
                                <RaisedButton className="row row-button"
                                              label={this.props.textToButtonFirstItemInRow}
                                              value={this.props.textToButtonFirstItemInRow}
                                              primary={true}
                                              onClick={this.props.onSearchButtonPressedDownloadExcel}/>
                            </MuiThemeProvider>
                        </div>
                    </div>

                    <div className="header-separtion-download-page">
                        <div className="col-md-6 well">
                            <h2>
                                {this.props.textToLabelSecondItemInRow}
                            </h2>
                            <MuiThemeProvider>
                                <RaisedButton className="row row-button"
                                              label={this.props.textToButtonSecondItemInRow}
                                              value={this.props.textToButtonSecondItemInRow}
                                              primary={true}
                                              onClick={this.props.onSearchButtonPressedDownloadFasta}/>
                            </MuiThemeProvider>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}