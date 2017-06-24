import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Constants} from "../../common/Constants";

export interface ISettingsAboutComponentProps {
    title: string;
    textMessage: string;
    buttonAcceptText: string;
}

export interface IState {

}

export class SettingsAboutComponent extends React.Component<ISettingsAboutComponentProps,
    IState> {
    public constructor(props: ISettingsAboutComponentProps) {
        super(props);
    }

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [

            <FlatButton
                label={this.props.buttonAcceptText}
                primary={true}
                onTouchTap={this.handleClose}
                keyboardFocused={true}
            />,
        ];

        return (
            <MuiThemeProvider>
                <div className="container-fluid component-margins">
                    <div>
                        <FlatButton primary={true}
                                    label={this.props.title}
                                    onTouchTap={this.handleOpen}/>
                    </div>

                    <Dialog
                        title={this.props.title}
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={() => this.handleClose()}
                    >
                        <label>
                            {this.props.textMessage}
                        </label>
                    </Dialog>

                </div>

            </MuiThemeProvider>

        );
    }

}
