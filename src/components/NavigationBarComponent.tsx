import * as React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings-applications'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import ActionPermMedia from "material-ui/svg-icons/action/perm-media";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;
const ManageFiles = <ActionPermMedia/>;
const AppSettings = <Settings/>;

import {browserHistory} from 'react-router';
import {RoutesConstants} from "../common/RoutesConstants";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {Constants} from "../common/Constants"

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

export class NavigationBarComponent extends React.Component<{}, {}> {
    state = {
        selectedIndex: 0,
    };

    select = (index) => {
        this.setState({selectedIndex: index});
        if (index == 1) {
            browserHistory.push(RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH);
        } else if (index == 2) {
            browserHistory.push(RoutesConstants.UPLOAD_FILES_ROUTE_PATH);
        } else if (index == 3) {
            browserHistory.push(RoutesConstants.MANAGE_FILES_ROUTE_PATH);
        } else if (index == 4) {
            browserHistory.push(RoutesConstants.SETTINGS_ROUTE_PATH);
        }

    };

    public render() {
        return (
            <div className="navigation-bar-component">
                <MuiThemeProvider>
                    <Paper zDepth={2}>
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
                                    id={MessagesConstants.UPLOAD_PAGE}/>}
                                icon={UploadFilesToProcess}
                                onTouchTap={() => this.select(2)}
                            />

                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.MANAGE_APP_PAGE}/>}
                                icon={ManageFiles}
                                onTouchTap={() => this.select(3)}
                            />

                            <BottomNavigationItem
                                label={<FormattedMessage
                                    id={MessagesConstants.SETTINGS_PAGE}/>}
                                icon={AppSettings}
                                onTouchTap={() => this.select(4)}
                            />
                        </BottomNavigation>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}