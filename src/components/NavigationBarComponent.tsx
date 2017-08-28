import * as React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import DownloadFiles from 'material-ui/svg-icons/file/file-download';
import Logout from 'material-ui/svg-icons/action/alarm-off'
import SearchDatabase from 'material-ui/svg-icons/action/youtube-searched-for'
import {FormattedMessage} from "react-intl";

const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;
const DownloadFilesToLocal = <DownloadFiles/>;
const AppSettings = <Settings/>;
const SearchFromDatabase = <SearchDatabase/>;
const LogoutSystem = <Logout/>;

import {browserHistory} from 'react-router';
import {RoutesConstants} from "../common/RoutesConstants";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {Constants} from "../common/Constants"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500, deepOrange500, deepOrange700,
    white, darkBlack, fullBlack,} from 'material-ui/styles/colors';

export class NavigationBarComponent extends React.Component<{}, {}> {
    state = {
        selectedIndex: 0,
    };

    select = (index) => {
        this.setState({selectedIndex: index});
        if (index == 1) {
            browserHistory.push(RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH);
        } else if (index == 2) {
            browserHistory.push(RoutesConstants.DATABASE_SEARCH_ROUTE_PATH);
        } else if (index == 3) {
            browserHistory.push(RoutesConstants.UPLOAD_FILES_ROUTE_PATH);
        } else if (index == 4) {
            browserHistory.push(RoutesConstants.DOWNLOAD_FILES_ROUTE_PATH);
        } else if (index == 5) {
            browserHistory.push(RoutesConstants.SETTINGS_ROUTE_PATH);
        }

    };

    public render() {

        const style = {
            height: "70px"
        };

        const muiTheme = getMuiTheme({
            // palette: {
            //     primary1Color: deepOrange500,
            //     primary2Color: deepOrange700,
            //     primary3Color: grey400,
            //     accent1Color: pinkA200,
            //     accent2Color: grey100,
            //     accent3Color: grey500,
            //     textColor: darkBlack,
            //     alternateTextColor: white,
            //     canvasColor: white,
            //     borderColor: grey300,
            //     pickerHeaderColor: cyan500,
            //     shadowColor: fullBlack,
            // },
            // appBar: {
            //     height: 50,
            // },
        });

        return (

            <div className="container-fluid navigation-bar-component">
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Paper zDepth={2} style={style}>
                        <BottomNavigation selectedIndex={this.state.selectedIndex}>
                            <span className="application-title">{Constants.APP_NAME}</span>
                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.SEARCH_PAGE}/>}
                                icon={SearchDnaSequences}
                                onTouchTap={() => this.select(1)}
                            />

                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.DATABASE_SEARCH_PAGE}/>}
                                icon={SearchFromDatabase}
                                onTouchTap={() => this.select(2)}
                            />

                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.UPLOAD_PAGE}/>}
                                icon={UploadFilesToProcess}
                                onTouchTap={() => this.select(3)}
                            />

                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.DOWNLOAD_PAGE}/>}
                                icon={DownloadFilesToLocal}
                                onTouchTap={() => this.select(4)}
                            />

                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.SETTINGS_PAGE}/>}
                                icon={AppSettings}
                                onTouchTap={() => this.select(5)}
                            />
                        </BottomNavigation>
                    </Paper>
                </MuiThemeProvider>
            </div>

        );
    }
}