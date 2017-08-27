import * as React from "react";
import {FormattedMessage} from "react-intl";
import {LoginRegisterForm} from "../../components/LoginRegisterForm";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;



export interface ILoginPageProps {
    intl?: any
}

export interface ILoginPageDispatchProps {

}

export interface ILoginPagePageState {

}

let divStyle = {
    minHeight: "100%",
    minWidth: "100%",

/* Set up proportionate scaling */
    width: "100%",
    height: "100%",

/* Set up positioning */
    position: "fixed" as "fixed",
    top: "0",
    left: "0",
    backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Cadena_de_ADN.jpg)"
};


export class LoginPage extends React.Component<ILoginPageProps & ILoginPageDispatchProps & InjectedIntlProps, ILoginPagePageState> {
    public constructor(props: ILoginPageProps & ILoginPageDispatchProps & InjectedIntlProps) {
        super(props);
    }

    public render() {
        return (
            <div style={divStyle}>
                <LoginRegisterForm>

                </LoginRegisterForm>
            </div>
        );
    }
}