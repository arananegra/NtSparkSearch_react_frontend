import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";
import {RowComponent} from "../CommonComponents/RowComponent";

export interface IDownloadRowsComponentProps {
    onSearchButtonPressedDownloadIds: () => any;
    onSearchButtonPressedDownloadFasta: () => any;

    textToLabelFirstItemInRow: string;
    textToButtonFirstItemInRow: string;

    textToLabelSecondItemInRow: string,
    textToButtonSecondItemInRow: string
}

export interface IDownloadRowsComponentState {

}

export class DownloadRowsComponent extends React.Component<IDownloadRowsComponentProps, IDownloadRowsComponentState> {
    public constructor(props: IDownloadRowsComponentProps) {
        super(props);
    }

    public componentWillMount() {

    }

    public render() {
        return (
                <CSSTransitionGroup
                    transitionName="subsequence-search-page-transition"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <div>
                        <div className="header-separtion-download-page">
                            <div className="col-md-6">
                                <RowComponent
                                    headerText={this.props.textToLabelFirstItemInRow}
                                    buttonText={this.props.textToButtonFirstItemInRow}
                                    onButtonPressed={this.props.onSearchButtonPressedDownloadIds}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="header-separtion-download-page">
                        <div className="col-md-6">
                            <RowComponent
                                headerText={this.props.textToLabelSecondItemInRow}
                                buttonText={this.props.textToButtonSecondItemInRow}
                                onButtonPressed={this.props.onSearchButtonPressedDownloadFasta}
                            />
                        </div>
                    </div>
                </CSSTransitionGroup>
        );
    }
}