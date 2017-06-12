import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {AppPipeline, store} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {SubSequenceSearchPageContainer} from "./src/pages/SubSequenceSearchPageContainer";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
import {RoutesConstants} from "./src/common/RoutesConstants";
import {UploadFilesToProcessingPage} from "./src/pages/UploadFilesToProcessingPage";
import {SettingsPage} from "./src/pages/SettingsPage";
import {DownloadPage} from "./src/pages/DownloadPage";
import {UploadFileToProcessingPageContainer} from "./src/pages/UploadFileToProcessingPageContainer";
import {IntlProvider} from "react-intl-redux";

class Index {
    public constructor() {

        injectTapEventPlugin();

        this.setInitialLanguage();

        const Start = () => (
            <Router history={browserHistory}>

                <Route path="/" component={AppPipeline}>
                    <IndexRoute component={SubSequenceSearchPageContainer}/>
                    <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH}
                           component={UploadFileToProcessingPageContainer}/>
                    <Route path={RoutesConstants.DOWNLOAD_FILES_ROUTE_PATH}
                           component={DownloadPage}/>
                    <Route path={RoutesConstants.SETTINGS_ROUTE_PATH}
                           component={SettingsPage}/>
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
        let languageBS = new LanguageBS();
        languageBS.changeSpanishLanguage();
    }
}


new Index();

