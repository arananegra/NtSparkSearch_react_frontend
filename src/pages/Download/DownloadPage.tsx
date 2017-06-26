import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";
import {DownloadRowsComponent} from "../../components/DownloadComponents/DownloadRowsComponent";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;

export interface IDownloadPageProps {
    intl?: any
}

export interface IDownloadPageDispatchProps {
    onSearchButtonPressedDownloadUnfilteredIds?: () => any;
    onSearchButtonPressedDownloadUnfilteredFasta: () => any;
    onSearchButtonPressedDownloadFilteredIds?: () => any;
    onSearchButtonPressedDownloadFilteredFasta?: () => any;
}

export interface IDownloadPagePageState {

}

export class DownloadPage extends React.Component<IDownloadPageProps & IDownloadPageDispatchProps & InjectedIntlProps, IDownloadPagePageState> {
    public constructor(props: IDownloadPageProps & IDownloadPageDispatchProps & InjectedIntlProps) {
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
                    <DownloadRowsComponent
                        textToLabelFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_ID_UNFILTERED})}
                        textToButtonFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_ID_UNFILTERED})}
                        textToLabelSecondItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_ID_FILTERED})}
                        textToButtonSecondItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_ID_FILTERED})}
                        onSearchButtonPressedDownloadIds={this.props.onSearchButtonPressedDownloadUnfilteredIds}
                        onSearchButtonPressedDownloadFasta={this.props.onSearchButtonPressedDownloadFilteredIds}
                    />
                    <DownloadRowsComponent
                        textToLabelFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_FASTA_UNFILTERED})}
                        textToButtonFirstItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_FASTA_UNFILTERED})}
                        textToLabelSecondItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_TEXT_FASTA_FILTERED})}
                        textToButtonSecondItemInRow={this.props.intl.formatMessage({id: MessagesConstants.DOWNLOAD_BUTTON_FASTA_FILTERED})}
                        onSearchButtonPressedDownloadIds={this.props.onSearchButtonPressedDownloadUnfilteredFasta}
                        onSearchButtonPressedDownloadFasta={this.props.onSearchButtonPressedDownloadFilteredFasta}
                    />
                </CSSTransitionGroup>
            </div>
        );
    }
}