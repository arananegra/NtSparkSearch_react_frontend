import {Action} from "redux";


export class LoginPageState {

    public constructor() {

    }
}

export function LoginPageReducer(state: LoginPageState = new LoginPageState(),
                                    action: Action): LoginPageState {

    switch (action.type) {


        default:
            return state;
    }
}