import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "../../common/Constants";
import {InputEmail} from "./InputEmail";
import {FlatButtonWithUploadInput} from "./FlatButtonWithUploadInput";

export interface IModalRequestWithUploadButtonProps {
    showDialog: boolean;
    onClick: (value: any) => any;
    onFileUpload: (fileEvent) => any;
    dialogTitle: string;
    dialogText: string;
    cancelButtonLabel: string;
    acceptButtonLabel: string;
}

export interface IState {

}

export class ModalRequestWithUploadButton extends React.Component<IModalRequestWithUploadButtonProps,
    IState> {

    public constructor(props: IModalRequestWithUploadButtonProps) {
        super(props);
    }

    public render() {
        const styles = {
            exampleImageInput: {
                cursor: 'pointer',
                position: 'absolute' as 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
            },
        };
        const actions = [
            <div className="row">
                <div className="col-md-offset-8 col-xs-1">
                    <FlatButton
                        label={this.props.cancelButtonLabel}
                        primary={true}
                        onTouchTap={(event) => {
                            event.preventDefault();
                            this.props.onClick(Constants.CANCEL_BUTTON_PRESSED_VALUE)
                        }}
                    >
                    </FlatButton>
                </div>

                <div className="col-md-offset-1 col-xs-1">
                    <FlatButtonWithUploadInput
                        buttonLabel={this.props.acceptButtonLabel}
                        onInputSubmitUpload={(event) => {
                            this.props.onFileUpload(event);
                            this.props.onClick(Constants.SUBMIT_BUTTON_PRESSED_VALUE);
                        }}
                        styleInputInsideButton={styles.exampleImageInput}
                    />
                </div>
            </div>

        ];

        return (
            <div>
                <MuiThemeProvider muiTheme={Constants.muiTheme}>
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