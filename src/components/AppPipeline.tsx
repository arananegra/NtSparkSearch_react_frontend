import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "../reducers/IndexReducers";
import {IntlProvider, intlReducer} from "react-intl-redux";
import {addLocaleData} from "react-intl";
import * as spanish from "react-intl/locale-data/es";
import * as english from "react-intl/locale-data/en";
import * as arabic from "react-intl/locale-data/ar";
import * as brahmi from "react-intl/locale-data/br"

addLocaleData([...spanish, ...english, ...arabic, ...brahmi]);

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
        
                  {this.props.children}
              </div>
          </IntlProvider>
        </Provider>
    );
}
}