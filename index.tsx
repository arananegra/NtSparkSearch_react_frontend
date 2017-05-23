import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {AppPipeline} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {SubSequenceSearchPageContainer} from "./src/pages/SubSequenceSearchPageContainer";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
import {RoutesConstants} from "./src/common/RoutesConstants";
import {UploadFilesToProcessingPage} from "./src/pages/UploadFilesToProcessingPage";

class Index {
    public constructor() {

        injectTapEventPlugin();

        this.setInitialLanguage();

        const Start = () => (
            <Router history={browserHistory}>
                <Route path="/" component={AppPipeline}>
                    <IndexRoute component={SubSequenceSearchPageContainer}/>
                    <Route path={RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH} component={SubSequenceSearchPageContainer} />
                    <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH} component={UploadFilesToProcessingPage} />
                </Route>
            </Router>
        );

             ReactDOM.render(
               <Start/>,
            document.getElementById('root')
        );
   
    }

    private setInitialLanguage() {
        let languageBS = new LanguageBS();
        languageBS.changeSpanishLanguage();
    }
}


new Index();

