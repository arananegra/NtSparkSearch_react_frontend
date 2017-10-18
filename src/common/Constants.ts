import {deepOrange400, deepOrange600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class Constants {
    public static SUBMIT_BUTTON_PRESSED_VALUE: number = 1;
    public static CANCEL_BUTTON_PRESSED_VALUE: number = 0;
    public static APP_NAME: string = "NT Spark Searcher";
    public static REQUIRE_ACCOUNT_ACTIVATION: string = 'Email requires confirmation.';
    public static TOKEN_SAVING_STRING: string = "token";
    public static IP_ADDRESS: string = "0.0.0.0";
    public static muiTheme = getMuiTheme({
        palette: {
            primary1Color: deepOrange400,
            primary2Color: deepOrange600,
        },
    });
}