import * as React from "react";
import * as ReactDOM from "react-dom";


import {AppPipeline} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
class Index {
    public constructor() {

        injectTapEventPlugin();

        this.setInitialLanguage();

        ReactDOM.render(
            <AppPipeline/>,
            document.getElementById('root')
        );
    }

    private setInitialLanguage() {
        let languageBS = new LanguageBS();
        languageBS.changeEnglishLanguage();
    }
}


new Index();

