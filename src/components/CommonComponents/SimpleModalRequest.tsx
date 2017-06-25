import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "../../common/Constants";

export interface ISimpleModalRequest {
    showDialog: boolean;
    onClick: (value: any) => any;
    dialogTitle: string;
    dialogText: string;
    cancelButtonLabel: string;
    acceptButtonLabel: string;
}

export interface IState {

}

export class SimpleModalRequest extends React.Component<ISimpleModalRequest,
    IState> {

    public constructor(props: ISimpleModalRequest) {
        super(props);
    }

    public render() {
        const actions = [
            <FlatButton
                label={this.props.cancelButtonLabel}
                keyboardFocused={true}
                primary={true}
                onTouchTap={(event) => {
                    this.props.onClick(Constants.CANCEL_BUTTON_PRESSED_VALUE)
                }}
            />,

            <FlatButton
                label={this.props.acceptButtonLabel}
                keyboardFocused={false}
                primary={true}
                onTouchTap={(event) => {
                    this.props.onClick(Constants.SUBMIT_BUTTON_PRESSED_VALUE)
                }}
            />,
        ];

        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title={this.props.dialogTitle}
                        actions={actions}
                        modal={false}
                        open={this.props.showDialog}
                        onRequestClose={(event) => {
                            this.props.onClick(Constants.CANCEL_BUTTON_PRESSED_VALUE)
                        }}>

                        {this.props.dialogText}

                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}