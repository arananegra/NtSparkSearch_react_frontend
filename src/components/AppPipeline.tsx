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

addLocaleData([...spanish, ...english]);

const reducer = combineReducers({
    reducers, 
    intl: intlReducer
});

export const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk["default"])
);

export class AppPipeline extends React.Component<{}, {}> {

public render(): JSX.Element {

        return (
        <Provider store={store}>
          <IntlProvider>
              <div className="container-fluid">
                  <NavigationBarComponent/>
                  {this.props.children}
              </div>
          </IntlProvider>
        </Provider>
    );
}
}