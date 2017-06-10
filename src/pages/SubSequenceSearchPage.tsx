import * as React from "react";
import {GeneSubSequenceSearcherComponent} from "../components/GeneSubSequenceSearcherComponent";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {SubSequenceInDNATableResult} from "../components/SubSequenceInDNATableResult";
import {GeneSearchPageDTO} from "../domain/GeneSearchPageDTO";

import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {GeneSubSequenceSearcherModalRequestComponent} from "../components/GeneSubSequenceSearcherModalRequestComponent";

import {store} from "../components/AppPipeline";
import {ShowModalDialogSearchRequestAction} from "../actions/ShowModalDialogSearchRequestAction";
import {Constants} from "../common/Constants";
import {NavigationBarComponent} from "../components/NavigationBarComponent";

export interface ISubSequenceSearchPageProps {
    geneSearcherPage: GeneSearchPageDTO;
    initializeSubSequenceGeneListFound: () => any;
    intl: any;
}

export interface ISubSequenceSearchPageState {

}

export class SubSequenceSearchPage extends React.Component<ISubSequenceSearchPageProps, ISubSequenceSearchPageState> {
    public constructor(props: ISubSequenceSearchPageProps) {
        super(props);
    }

    public componentWillMount() {
        this.props.initializeSubSequenceGeneListFound();
    }

    private onDnaSubSequenceUserInput(event: object, newValue: string) {

    }

    private manageOnClickModal(option: any) {
        let showModal: boolean;

        console.log("WTF!: ", option);

        showModal = false;

        if (option == Constants.SUBMIT_BUTTON_PRESSED_VALUE) {
            showModal = true;
        } else if (option == Constants.CANCEL_BUTTON_PRESSED_VALUE) {
            showModal = false;
        }

        store.dispatch(ShowModalDialogSearchRequestAction(
            showModal
        ));
    }

    private onSearch(event) {
        store.dispatch(ShowModalDialogSearchRequestAction(
            true
        ));
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
                    <div className="row gene-searcher-component">
                        <GeneSubSequenceSearcherComponent
                            onChangeText={this.onDnaSubSequenceUserInput.bind(this)}
                            dnaSubSequenceNameHintText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_HINT_TEXT})}
                            dnaSubSequenceFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_FLOATING_TEXT})}
                            dnaGenesToSearchHintText={this.props.intl.formatMessage({id: MessagesConstants.GENES_PATTERN})}
                            dnaGenesToSearchFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.GENES})}
                            buttonSearchLabel={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                            buttonSearchValue={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                            onSearchButtonPressed={this.onSearch.bind(this)}
                        />
                        <GeneSubSequenceSearcherModalRequestComponent
                            showDialog={this.props.geneSearcherPage._showModalDialogSearchRequest}
                            onClick={this.manageOnClickModal.bind(this)}
                            dialogTitle="WTF In MoDaL!!!"/>
                    </div>
                    <div className="row gene-result-component">
                        <SubSequenceInDNATableResult
                            columnList={this.props.geneSearcherPage._geneTableResultHeaderColumns}
                            dataList={this.props.geneSearcherPage._geneSubSequenceResultFound}
                            noDataText={this.props.intl.formatMessage({id: MessagesConstants.NO_DATA_TO_SHOW})}
                            intl = {this.props.intl}/>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}