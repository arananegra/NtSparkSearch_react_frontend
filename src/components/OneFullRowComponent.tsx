import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";

export interface IOneFullRowComponentProps {
    onButtonPressed?: (value) => any;
    headerText: string;
    buttonText: string;
}

export interface IOneFullRowComponentState {

}

export class OneFullRowComponent extends React.Component<IOneFullRowComponentProps, IOneFullRowComponentState> {
    public constructor(props: IOneFullRowComponentProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="well">
                    <h2>
                        {this.props.headerText}
                    </h2>
                    <MuiThemeProvider>
                        <RaisedButton className="row row-button"
                                      label={this.props.buttonText}
                                      value={this.props.buttonText}
                                      primary={true}
                                      onClick={this.props.onButtonPressed}/>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}