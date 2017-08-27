import * as React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./CommonComponents/InputText";
import ReactSignupLoginComponent from 'react-signup-login-component';
import {ButtonComponent} from "./CommonComponents/ButtonComponent";

export interface ILoginFormProps {
    onChangeText?: (event: object, newValue: string) => any;
    hintText?: string;
    floatingLabelText?: string;
    valueToText?: string;

    onButtonPressed?: (value) => any;
    label?: string;
    value?: string;
    primary?: boolean
    secondary?: boolean
}

export interface IState {

}
//'http://img11.deviantart.net/6316/i/2013/113/6/e/jump_hurdles_by_zoranphoto-d62pl6q.jpg'
//../../assets/images/dna.jpg
let imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Cadena_de_ADN.jpg';
const styles = {
    root: {
        background: 'url(' + imgUrl + ') noRepeat center center fixed',
        backgroundSize: 'cover',
    }
};

export class LoginRegisterForm extends React.Component<ILoginFormProps, IState> {
    public constructor(props: ILoginFormProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="container-fluid login-register-component">
                        <Paper zDepth={5}>
                            <span className="login-title">Access page</span>
                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeText}
                                    hintText={this.props.hintText}
                                    floatingLabelText={this.props.floatingLabelText}
                                    valueToText={this.props.valueToText}/>
                            </div>
                            <div className="login-register-div">
                                <InputText
                                    onChangeText={this.props.onChangeText}
                                    hintText={this.props.hintText}
                                    floatingLabelText={this.props.floatingLabelText}
                                    valueToText={this.props.valueToText}/>
                            </div>

                            <div className="login-register-button-login">
                                <ButtonComponent
                                    onButtonPressed={this.props.onButtonPressed}
                                    label="Login"
                                    value="Login"
                                    primary={true}>
                                </ButtonComponent>
                            </div>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
