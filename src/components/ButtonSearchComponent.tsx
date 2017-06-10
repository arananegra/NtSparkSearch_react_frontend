import * as React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface IButtonSearchComponentProps {
    onSearchButtonPressed: (value) => any;
    label: string;
    value: string;
}

export interface IState {

}

export class ButtonSearchComponent extends React.Component<IButtonSearchComponentProps, IState> {

    public constructor(props: IButtonSearchComponentProps) {
        super(props);
    }


    public render() {

        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton label={this.props.label} value={this.props.value}
                                  primary={true}
                                  onClick={this.props.onSearchButtonPressed}/>
                </MuiThemeProvider>
            </div>
        );
    }
}