import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "../reducers/IndexReducers";
import {IntlProvider, intlReducer} from "react-intl-redux";
import {addLocaleData} from "react-intl";
import * as spanish from "react-intl/locale-data/es";
import * as english from "react-intl/locale-data/en";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'
import {SubSequenceSearchPageContainer} from "../pages/SubSequenceSearchPageContainer";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {RoutesConstants} from "../common/RoutesConstants";
import {UploadFileToProcessingPageContainer} from "../pages/UploadFileToProcessingPageContainer";
import {ManageAppPage} from "../pages/ManageAppPage";

addLocaleData([...spanish, ...english]);

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
});

const middlewares = [ReduxThunk["default"], logger];

export const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)),
);

export class AppPipeline extends React.Component<{}, {}> {

    public render(): JSX.Element {

        return (

            <Provider store={store}>
                <IntlProvider>
                    <Router history={browserHistory}>
                        <div className="container-fluid">
                            {this.props.children}
                            <Route path="/" component={SubSequenceSearchPageContainer}/>
                            <Route path={RoutesConstants.UPLOAD_FILES_ROUTE_PATH}
                                   component={UploadFileToProcessingPageContainer}/>
                            <Route path={RoutesConstants.MANAGE_FILES_ROUTE_PATH}
                                   component={ManageAppPage}/>
                        </div>
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }

}