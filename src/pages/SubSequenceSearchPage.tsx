import * as React from "react";
import {GeneSubSequenceSearcherComponent} from "../components/GeneSubSequenceSearcherComponent";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {SubSequenceInDNATableResult} from "../components/SubSequenceInDNATableResult";
import {GeneSearchPageDTO} from "../domain/GeneSearchPageDTO";

export interface ISubSequenceSearchPageProps {
    geneSearcherPage: GeneSearchPageDTO;
    initializeSubSequenceGeneListFound: () => any;
    intl: any;
}

export interface ISubSequenceSearchPageState {

}

export class SubSequenceSearchPage extends React.Component<ISubSequenceSearchPageProps, ISubSequenceSearchPageState> {
    public constructor(props: ISubSequenceSearchPageProps){
        super(props);
    }

    public componentWillMount() {
        this.props.initializeSubSequenceGeneListFound();
    }

    private onDnaSubSequenceUserInput(event: object, newValue: string) {

    }


    public render(){
        return (
            <div className="container-fluid">
                <div className="row gene-searcher-component">
                    <GeneSubSequenceSearcherComponent
                        onChangeText={this.onDnaSubSequenceUserInput.bind(this)}
                        dnaSubSequenceNameHintText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_HINT_TEXT})}
                        dnaSubSequenceFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.INPUT_DNA_FLOATING_TEXT})}
                        dnaGenesToSearchHintText={this.props.intl.formatMessage({id: MessagesConstants.GENES_PATTERN})}
                        dnaGenesToSearchFloatingLabelText={this.props.intl.formatMessage({id: MessagesConstants.GENES})}
                        buttonSearchLabel={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                        buttonSearchValue={this.props.intl.formatMessage({id: MessagesConstants.SEARCH})}
                    />
                </div>
                <div className="row">
                    <SubSequenceInDNATableResult
                        columnList={this.props.geneSearcherPage._geneTableResultHeaderColumns}
                        dataList={this.props.geneSearcherPage._geneSubSequenceResultFound}
                        noDataText={this.props.intl.formatMessage({id: MessagesConstants.NO_DATA_TO_SHOW})}/>
                </div>
            </div>
        );
    }
}