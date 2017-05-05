import * as React from "react";
import {InputText} from "./InputText";

import {FormattedDate, FormattedMessage, FormattedRelative} from "react-intl";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {GeneSubSequenceSearcherDTO} from "../domain/GeneSubSequenceSearcherDTO";
import {ButtonSearch} from "../components/ButtonSearch";

export interface IGeneSubSequenceSearcherComponent {
    geneSubSequenceSearcher: GeneSubSequenceSearcherDTO;
    onChangeText: (event) => any;
    dnaSubSequenceNameHintText: string;
    dnaSubSequenceFloatingLabelText: string;

    dnaGenesToSearchHintText: string;
    dnaGenesToSearchFloatingLabelText: string;

    buttonSearchLabel: string;
    buttonSearchValue: string;
 }

export interface IUserDetailComponentState {

 }

export class GeneSubSequenceSearcherComponent extends React.Component<IGeneSubSequenceSearcherComponent,
                                                                      IUserDetailComponentState> {
    
    public constructor(props: IGeneSubSequenceSearcherComponent) {
        super(props);
    }

    /**
     *  <fieldset>
     <legend><FormattedMessage id={MessagesConstants.SEARCH_DNA_SUBSEQUENCES_IN_GENES}/></legend>
     * */


    public render(){
        return (
                <div>
                        <form>
                            <div className="form-group">
                                <div className="col-md-6">
                                    <InputText
                                                onChangeText={this.props.onChangeText}
                                                hintText={this.props.dnaSubSequenceNameHintText}
                                                floatingLabelText={this.props.dnaSubSequenceFloatingLabelText} />
                                </div>

                                <div className="col-md-5">
                                    <InputText
                                        onChangeText={this.props.onChangeText}
                                        hintText={this.props.dnaGenesToSearchHintText}
                                        floatingLabelText={this.props.dnaGenesToSearchFloatingLabelText} />
                                </div>

                                <div className="col-md-1 sequence-search-page-button-searcher">
                                    <ButtonSearch label={this.props.buttonSearchLabel}
                                                  value={this.props.buttonSearchValue}/>
                                </div>
                            </div>
                        </form>
                </div>
        );
    }

}