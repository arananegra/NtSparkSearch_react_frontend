import * as React from "react";
import * as ReactDOM from "react-dom";
import {IndexRoute, Route, Router} from "react-router";
import {replace, routeActions, routerActions} from "react-router-redux";
import {AppPipeline} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {SubSequenceSearchPageContainer} from "./src/pages/SubSequenceSearch/SubSequenceSearchPageContainer";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
import {RoutesConstants} from "./src/common/RoutesConstants";
import {UploadFileToProcessingPageContainer} from "./src/pages/UploadFilesToProcessing/UploadFileToProcessingPageContainer";
import {DownloadPageContainer} from "./src/pages/Download/DownloadPageContainer";
import {SettingsContainer} from "./src/pages/Settings/SettingsContainer";
import {DatabaseSubSeqSearchPageContainer} from "./src/pages/DatabaseSubSeqSearch/DatabaseSubSeqSearchPageContainer";
import {LoginPageContainer} from "./src/pages/Login/LoginPageContainer";
import {history} from "./src/components/AppPipeline";
import {userIsAuthenticated, userIsNotAuthenticated} from "./src/access-data/bs/AuthBS";

class Index {
    public constructor() {

        injectTapEventPlugin();

        this.setInitialLanguage();

        const Start = () => (
            <Router history={history}>
                <Route path="/" component={AppPipeline}>
                    <IndexRoute component={userIsAuthenticated(SubSequenceSearchPageContainer)}/>
                    <Route path={RoutesConstants.DATABASE_SEARCH_ROUTE_PATH}
                           component={userIsAuthenticated(DatabaseSubSeqSearchPageContainer)}/>
                    <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH}
                           component={userIsAuthenticated(UploadFileToProcessingPageContainer)}/>
                    <Route path={RoutesConstants.DOWNLOAD_FILES_ROUTE_PATH}
                           component={userIsAuthenticated(DownloadPageContainer)}/>
                    <Route path={RoutesConstants.SETTINGS_ROUTE_PATH}
                           component={userIsAuthenticated(SettingsContainer)}/>
                    <Route path={RoutesConstants.LOGIN_ROUTE_PATH}
                           component={userIsNotAuthenticated(LoginPageContainer)}/>
                </Route>
            </Router>
        );

        ReactDOM.render(
            <Start/>
            ,
            document.getElementById('root')
        );

    }

    private setInitialLanguage() {
        let userLang = navigator.language;
        let languageBS = new LanguageBS();
        if (userLang === "es") {
            languageBS.changeSpanishLanguage();
        } else {
            languageBS.changeEnglishLanguage();
        }

    }
}


new Index();

