import * as React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;

import {browserHistory} from 'react-router';
import {RoutesConstants} from "../common/RoutesConstants";


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
        }

    }

    public render() {
        return (
            <div className="navigation-bar-component">
                <MuiThemeProvider>
                    <Paper zDepth={2}>
                        <BottomNavigation selectedIndex={this.state.selectedIndex}>
                            <span className="application-title">Veritas Gene Finder</span>
                            <BottomNavigationItem
                                label="Buscar Secuencia"
                                icon={SearchDnaSequences}
                                onTouchTap={() => this.select(1)}
                            />

                            <BottomNavigationItem
                                label="Procesar Archivos"
                                icon={UploadFilesToProcess}
                                onTouchTap={() => this.select(2)}
                            />

                        </BottomNavigation>
                    </Paper>
                </MuiThemeProvider>
            </div>
        );
    }
}