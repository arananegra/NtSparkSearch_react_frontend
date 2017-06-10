import * as React from "react";
import * as ReactDOM from "react-dom";


import {AppPipeline} from "./src/components/AppPipeline";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {LanguageBS} from "./src/access-data/bs/LanguageBS";
//import { HashRouter } from 'react-router-dom'
class Index {
    public constructor() {

/*        let testDao = new TestAxiosQDAO();

        console.log("WTF!!!");

        testDao.testingAxiosQ()
            .then((geneDataList) => {
                geneDataList.map((singleGene) => {
                   console.log(singleGene);
                });
            });*/

        injectTapEventPlugin();

        this.setInitialLanguage();

        // const Start = () => (
        //     <Router history={browserHistory}>
        //         <Route path="/" component={AppPipeline}>
        //             <IndexRoute component={SubSequenceSearchPageContainer}/>
        //             <Route path={RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH} component={SubSequenceSearchPageContainer} />
        //             <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH} component={UploadFilesToProcessingPage} />
        //         </Route>
        //     </Router>
        // );

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

