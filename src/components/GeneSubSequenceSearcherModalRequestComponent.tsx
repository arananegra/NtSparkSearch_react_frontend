import * as React from "react";
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "../common/Constants";
import {InputEmail} from "./CommonComponents/InputEmail";

export interface IGeneSubSequenceSearcherModarRequestProps {
    showDialog: boolean;
    onClick: (value: any) => any;
    dialogTitle: string;
    dialogText: string;
    hintText: string;
    floatingLabelText: string;
    cancelButtonLabel: string;
    acceptButtonLabel: string;
}

export interface IState {

}

export class GeneSubSequenceSearcherModalRequestComponent extends React.Component<IGeneSubSequenceSearcherModarRequestProps,
    IState> {

    public constructor(props: IGeneSubSequenceSearcherModarRequestProps) {
        super(props);
    }

    private  onEmailChangeText(event: object, newValue: string) {

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
                            onChangeText={this.onEmailChangeText}
                            hintText={this.props.hintText}
                            floatingLabelText={this.props.floatingLabelText}/>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}