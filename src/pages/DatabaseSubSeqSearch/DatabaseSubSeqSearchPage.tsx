import * as React from "react";
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {MessagesConstants} from "../../i18n/MessagesConstants";
import {FormattedMessage} from "react-intl";
import {SubSequenceInDNATableResult} from "../../components/TableComponents/SubSequenceInDNATableResult";
import {GeneSearchPageDTO} from "../../domain/SearchPages/GeneSearchPageDTO";
import {GeneSubSequenceDatabaseSearcherComponent} from "../../components/SearcherBarComponents/GeneSubSequenceDatabaseSearcherComponent";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;


export interface IDatabaseSubSeqSearchPageProps {
    geneSearcherPage: GeneSearchPageDTO;
    intl?: any;
}

export interface IDatabaseSubSeqSearchPageDispatchProps {
    initializeSubSequenceGeneListFound: () => any;
}
export interface IDatabaseSubSeqSearchPageState {

}

export class DatabaseSubSeqSearchPage extends React.Component<IDatabaseSubSeqSearchPageProps & IDatabaseSubSeqSearchPageDispatchProps & InjectedIntlProps, IDatabaseSubSeqSearchPageState> {
    public constructor(props: IDatabaseSubSeqSearchPageProps & IDatabaseSubSeqSearchPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    public componentWillMount() {
        this.props.initializeSubSequenceGeneListFound();
    }

    private onDnaSubSequenceUserInput(event: object, newValue: string) {

    }

    private onSearch(event) {

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
                    <div className="row gene-searcher-component">
                        <GeneSubSequenceDatabaseSearcherComponent
                            onChangeText={this.onDnaSubSequenceUserInput.bind(this)}
                            dnaSubSequenceNameHintText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_HINT_TEXT})}
                            dnaSubSequenceFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_FLOATING_TEXT})}
                            buttonSearchLabel={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                            buttonSearchValue={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                            onSearchButtonPressed={this.onSearch.bind(this)}
                        />

                    </div>
                    <div className="row gene-result-component">
                        <SubSequenceInDNATableResult
                            columnList={this.props.geneSearcherPage._geneTableResultHeaderColumns}
                            dataList={this.props.geneSearcherPage._geneSubSequenceResultFound}
                            intl={this.props.intl}
                            noDataText={this.props.intl.formatMessage({id: MessagesConstants.NO_DATA_TO_SHOW})}/>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}