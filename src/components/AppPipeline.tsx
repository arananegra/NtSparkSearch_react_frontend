import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "../reducers/IndexReducers";
import {IntlProvider, intlReducer} from "react-intl-redux";
import {addLocaleData} from "react-intl";
import * as spanish from "react-intl/locale-data/es";
import * as english from "react-intl/locale-data/en";
import {NavigationBarComponent} from "./NavigationBarComponent";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {SubSequenceSearchPageContainer} from "../pages/SubSequenceSearchPageContainer";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

const history = createHistory();

addLocaleData([...spanish, ...english]);

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
    router: routerReducer
});

const middlewares = [ReduxThunk["default"], logger, routerMiddleware(history)];

export const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)),
);

//<NavigationBarComponent/> esto va a cada container


//         <Route path="/" component={AppPipeline}>
//             <IndexRoute component={SubSequenceSearchPageContainer}/>
//             <Route path={RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH} component={SubSequenceSearchPageContainer} />
//             <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH} component={UploadFilesToProcessingPage} />
//         </Route>


export class AppPipeline extends React.Component<{}, {}> {

    public render(): JSX.Element {

        return (
            <Provider store={store}>
                <IntlProvider>
                    <Router history={browserHistory}>
                        <div className="container-fluid">
                            {this.props.children}
                            <Route path="/" component={SubSequenceSearchPageContainer}/>
                        </div>
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }
}