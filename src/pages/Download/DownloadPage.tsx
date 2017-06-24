import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";
import {DownloadRowComponent} from "../../components/DownloadRowComponent";

export interface IDownloadPageProps {
    onSearchButtonPressedDownloadExcel?: (value) => any;
    onSearchButtonPressedDownloadFasta?: (value) => any;
    intl: any
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
                <CSSTransitionGroup
                    transitionName="subsequence-search-page-transition"
                    transitionAppear={true}
                    transitionAppearTimeout={5000}
                    transitionEnterTimeout={5000}
                    transitionLeaveTimeout={5000}>
                    <DownloadRowComponent
                        textToLabelFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_ID_UNFILTERED})}
                        textToButtonFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_ID_UNFILTERED})}
                        textToLabelSecondItemInRow = {this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_ID_FILTERED})}
                        textToButtonSecondItemInRow = {this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_ID_FILTERED})}
                        onSearchButtonPressedDownloadExcel = {this.props.onSearchButtonPressedDownloadExcel}
                        onSearchButtonPressedDownloadFasta = {this.props.onSearchButtonPressedDownloadFasta}
                    />
                    <DownloadRowComponent
                        textToLabelFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_FASTA_UNFILTERED})}
                        textToButtonFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_FASTA_UNFILTERED})}
                        textToLabelSecondItemInRow = {this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_FASTA_FILTERED})}
                        textToButtonSecondItemInRow = {this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_FASTA_FILTERED})}
                        onSearchButtonPressedDownloadExcel = {this.props.onSearchButtonPressedDownloadExcel}
                        onSearchButtonPressedDownloadFasta = {this.props.onSearchButtonPressedDownloadFasta}
                    />
                </CSSTransitionGroup>
            </div>
        );
    }
}