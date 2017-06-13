import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {AppPipeline, store} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {SubSequenceSearchPageContainer} from "./src/pages/SubSequenceSearchPageContainer";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
import {RoutesConstants} from "./src/common/RoutesConstants";
import {UploadFileToProcessingPageContainer} from "./src/pages/UploadFileToProcessingPageContainer";
import {DownloadPageContainer} from "./src/pages/DownloadPageContainer";
import {SettingsContainer} from "./src/pages/SettingsContainer";

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
                           component={DownloadPageContainer}/>
                    <Route path={RoutesConstants.SETTINGS_ROUTE_PATH}
                           component={SettingsContainer}/>
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

