import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "../../common/Constants";
import {InputEmail} from "./InputEmail";

export interface IModalRequestWithTextBoxComponentProps {
    showDialog: boolean;
    onClick: (value: any) => any;
    onInputTextChange?:(newValue) => string;
    dialogTitle: string;
    dialogText: string;
    hintText: string;
    floatingLabelText: string;
    cancelButtonLabel: string;
    acceptButtonLabel: string;
}

export interface IState {

}

export class ModalRequestWithTextBoxComponent extends React.Component<IModalRequestWithTextBoxComponentProps,
    IState> {

    public constructor(props: IModalRequestWithTextBoxComponentProps) {
        super(props);
    }

    private  onTextChange(event: object, newValue: string) {
        this.props.onInputTextChange(newValue);
    }

    public render() {
        const actions = [
            <FlatButton
                label={this.props.cancelButtonLabel}
                primary={true}
                onTouchTap={(event) => {
                    //TODO : esto?
                    //event.preventDefault();
                    this.props.onClick(Constants.CANCEL_BUTTON_PRESSED_VALUE)
                }}
            />,

            <FlatButton
                label={this.props.acceptButtonLabel}
                keyboardFocused={true}
                primary={true}
                onTouchTap={(event) => {
                    //event.preventDefault();
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


                        <InputEmail
                            onChangeText={this.onTextChange.bind(this)}
                            hintText={this.props.hintText}
                            floatingLabelText={this.props.floatingLabelText}/>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}