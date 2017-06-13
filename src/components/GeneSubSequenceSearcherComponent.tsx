import * as React from "react";
import {InputText} from "./InputText";

import {FormattedDate, FormattedMessage, FormattedRelative} from "react-intl";
import {ButtonSearchComponent} from "./ButtonSearchComponent";

export interface IGeneSubSequenceSearcherComponent {
    onChangeText: (event: object, newValue: string) => any;
    dnaSubSequenceNameHintText: string;
    dnaSubSequenceFloatingLabelText: string;

    dnaGenesToSearchHintText: string;
    dnaGenesToSearchFloatingLabelText: string;

    buttonSearchLabel: string;
    buttonSearchValue: string;

    onSearchButtonPressed: (event: any) => any;
}

export interface IUserDetailComponentState {

}

export class GeneSubSequenceSearcherComponent extends React.Component<IGeneSubSequenceSearcherComponent,
    IUserDetailComponentState> {

    public constructor(props: IGeneSubSequenceSearcherComponent) {
        super(props);
    }


    public render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-1">
                                    <InputText
                                        onChangeText={this.props.onChangeText}
                                        hintText={this.props.dnaSubSequenceNameHintText}
                                        floatingLabelText={this.props.dnaSubSequenceFloatingLabelText}/>
                                </div>


                                <div className="col-md-offset-4 col-md-1">
                                    <InputText
                                        onChangeText={this.props.onChangeText}
                                        hintText={this.props.dnaGenesToSearchHintText}
                                        floatingLabelText={this.props.dnaGenesToSearchFloatingLabelText}/>
                                </div>

                                <div className="col-md-offset-4 col-md-1 sequence-search-page-button-searcher">
                                    <ButtonSearchComponent label={this.props.buttonSearchLabel}
                                                           value={this.props.buttonSearchValue}
                                                           onSearchButtonPressed={this.props.onSearchButtonPressed}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

//sequence-search-page-button-searcher