import * as React from "react";
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface IFlatButtonWithUploadInputProps {
    buttonLabel: string;
    onInputSubmitUpload: (event: any) => any;
    styleInputInsideButton: any;
}

export interface IState {

}

export class FlatButtonWithUploadInput extends React.Component<IFlatButtonWithUploadInputProps,
    IState> {

    public constructor(props: IFlatButtonWithUploadInputProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <FlatButton
                        label={this.props.buttonLabel}
                        primary={true}
                        labelPosition="before"
                        containerElement="label"
                    >
                        <input type="file" style={this.props.styleInputInsideButton}
                               onChange={this.props.onInputSubmitUpload}/>
                    </FlatButton>
                </MuiThemeProvider>
            </div>
        );
    }
}