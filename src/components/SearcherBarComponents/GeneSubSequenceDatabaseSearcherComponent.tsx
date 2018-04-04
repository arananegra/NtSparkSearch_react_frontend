import * as React from "react";
import {InputText} from "../CommonComponents/InputText";

import {FormattedDate, FormattedMessage, FormattedRelative} from "react-intl";
import {ButtonComponent} from "../CommonComponents/ButtonComponent";

export interface IGeneSubSequenceDatabaseSearcherComponentProps {
    onChangeText: (event: object, newValue: string) => any;
    dnaSubSequenceNameHintText: string;
    dnaSubSequenceFloatingLabelText: string;
    dnaSubSequenceToFetch: string;

    buttonSearchLabel: string;
    buttonSearchValue: string;

    onSearchButtonPressed: (event: any) => any;
}

export interface IGeneSubSequenceDatabaseSearcherComponentState {

}

export class GeneSubSequenceDatabaseSearcherComponent extends React.Component<IGeneSubSequenceDatabaseSearcherComponentProps,
    IGeneSubSequenceDatabaseSearcherComponentState> {

    public constructor(props: IGeneSubSequenceDatabaseSearcherComponentProps) {
        super(props);
    }


    public render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-1 col-md-1">
                                    <InputText
                                        onChangeText={this.props.onChangeText}
                                        hintText={this.props.dnaSubSequenceNameHintText}
                                        floatingLabelText={this.props.dnaSubSequenceFloatingLabelText}
                                        valueToText={this.props.dnaSubSequenceToFetch}/>
                                </div>

                                <div className="col-md-offset-8 col-md-1 sequence-search-page-button-searcher">
                                    <ButtonComponent label={this.props.buttonSearchLabel}
                                                     value={this.props.buttonSearchValue}
                                                     primary={true}
                                                     onButtonPressed={this.props.onSearchButtonPressed}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}