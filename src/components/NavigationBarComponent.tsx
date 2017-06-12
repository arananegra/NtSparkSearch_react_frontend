import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import DownloadFiles from 'material-ui/svg-icons/file/file-download';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FormattedMessage} from "react-intl";
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;
const DownloadFilesToLocal = <DownloadFiles/>;
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
            browserHistory.push(RoutesConstants.DOWNLOAD_FILES_ROUTE_PATH);
        } else if (index == 4) {
            browserHistory.push(RoutesConstants.SETTINGS_ROUTE_PATH);
        }

    };

    public render() {
        const style = {
            height: 70,
        };


        return (
            <div className="container-fluid navigation-bar-component">
                <MuiThemeProvider>
                    <Tabs initialSelectedIndex={this.state.selectedIndex}>
                        <Tab
                            icon={SearchDnaSequences}
                            label={<FormattedMessage
                                id={MessagesConstants.SEARCH_PAGE}/>}
                            onActive={() => this.select(1)}
                        />
                        <Tab
                            icon={UploadFilesToProcess}
                            label={<FormattedMessage
                                id={MessagesConstants.UPLOAD_PAGE}/>}
                            onActive={() => this.select(2)}
                        />
                        <Tab
                            icon={DownloadFilesToLocal}
                            label={<FormattedMessage
                                id={MessagesConstants.DOWNLOAD_PAGE}/>}
                            onActive={() => this.select(3)}
                        />
                        <Tab
                            icon={AppSettings}
                            label={<FormattedMessage
                                id={MessagesConstants.SETTINGS_PAGE}/>}
                            onActive={() => this.select(4)}
                        />
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }
}