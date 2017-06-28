import * as React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Upload from 'material-ui-upload/Upload';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "../../common/Constants";
import {InputEmail} from "./InputEmail";

export interface IModalRequestWithTextBoxComponentProps {
    showDialog: boolean;
    onClick: (value: any) => any;
    onInputTextChange?: (newValue) => string;
    dialogTitle: string;
    dialogText: string;
    hintText: string;
    floatingLabelText: string;
    cancelButtonLabel: string;
    acceptButtonLabel: string;
}

export interface IState {

}

export class ModalRequestWithTextBoxAndUploadButton extends React.Component<IModalRequestWithTextBoxComponentProps,
    IState> {

    public constructor(props: IModalRequestWithTextBoxComponentProps) {
        super(props);
    }

    private  onTextChange(event: object, newValue: string) {
        this.props.onInputTextChange(newValue);
    }


    public render() {
        const styles = {
            button: {
                margin: -12,
                //padding: "15px",
            },
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
            <FlatButton
                label={this.props.cancelButtonLabel}
                primary={true}
                onTouchTap={(event) => {
                    //TODO : esto?
                    event.preventDefault();
                    this.props.onClick(Constants.CANCEL_BUTTON_PRESSED_VALUE)
                }}
            >

            </FlatButton>,

            <FlatButton
                label={this.props.acceptButtonLabel}
                primary={true}
                labelPosition="before"
                style={styles.button}
                containerElement="label"
            >
                <input type="file" className="input-file" onChange={(event) => {
                    event.preventDefault();
                    let data = new FormData();
                    data.append('file', event.target.files[0]);
                    console.log("", data);
                    console.log("", event.target.files[0]);
                    this.props.onClick(Constants.CANCEL_BUTTON_PRESSED_VALUE)
                }}/>

            </FlatButton>,
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