/**
 * Created with JetBrains WebStorm.
 * User: alicia
 * Date: 20/04/17
 * Time: 12:31
 * To change this template use File | Settings | File Templates.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import {AppPipeline} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {SubSequenceSearchPageContainer} from "./src/pages/SubSequenceSearchPageContainer";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";

class Index {
    public constructor() {

        injectTapEventPlugin();

        this.setInitialLanguage();

             ReactDOM.render(
            <AppPipeline>
                <SubSequenceSearchPageContainer/>
            </AppPipeline>,
            document.getElementById('root')
        );
   
    }

    private setInitialLanguage() {
        let languageBS = new LanguageBS();
        languageBS.changeSpanishLanguage();
    }
}


new Index();

