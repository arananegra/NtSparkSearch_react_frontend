import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {AppPipeline, store} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {SubSequenceSearchPageContainer} from "./src/pages/SubSequenceSearch/SubSequenceSearchPageContainer";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
import {RoutesConstants} from "./src/common/RoutesConstants";
import {UploadFileToProcessingPageContainer} from "./src/pages/UploadFilesToProcessing/UploadFileToProcessingPageContainer";
import {DownloadPageContainer} from "./src/pages/Download/DownloadPageContainer";
import {SettingsContainer} from "./src/pages/Settings/SettingsContainer";
import {DatabaseSubSeqSearchPageContainer} from "./src/pages/DatabaseSubSeqSearch/DatabaseSubSeqSearchPageContainer";
import {history} from "./src/components/AppPipeline"
import {LoginPageContainer} from "./src/pages/Login/LoginPageContainer";

function requireAuth(nextState, replace) {
    if (sessionStorage.getItem("token") === null) {
        replace({
            pathname: RoutesConstants.LOGIN_ROUTE_PATH,
            state: {nextPathname: nextState.location.pathname}
        })
    }
}


class Index {
    public constructor() {

        injectTapEventPlugin();

        this.setInitialLanguage();

        const Start = () => (
            <Router history={history}>

                <Route path="/" component={AppPipeline}>
                    <IndexRoute component={SubSequenceSearchPageContainer} onEnter={requireAuth}/>
                    <Route path={RoutesConstants.DATABASE_SEARCH_ROUTE_PATH}
                           component={DatabaseSubSeqSearchPageContainer} onEnter={requireAuth}/>
                    <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH}
                           component={UploadFileToProcessingPageContainer} onEnter={requireAuth}/>
                    <Route path={RoutesConstants.DOWNLOAD_FILES_ROUTE_PATH}
                           component={DownloadPageContainer} onEnter={requireAuth}/>
                    <Route path={RoutesConstants.SETTINGS_ROUTE_PATH}
                           component={SettingsContainer} onEnter={requireAuth}/>
                    <Route path={RoutesConstants.LOGIN_ROUTE_PATH}
                           component={LoginPageContainer}/>
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

