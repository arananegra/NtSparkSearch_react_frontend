import {connectedRouterRedirect} from "redux-auth-wrapper/history3/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history3/locationHelper";
import {Constants} from "../../common/Constants";
import {RoutesConstants} from "../../common/RoutesConstants";

const locationHelper = locationHelperBuilder({});


export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: RoutesConstants.LOGIN_ROUTE_PATH,
    authenticatedSelector: (state) => sessionStorage.getItem(Constants.TOKEN_SAVING_STRING) !== null,
    wrapperDisplayName: 'UserIsAuthenticated',
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || "/",
    allowRedirectBack: false,
    authenticatedSelector: state => sessionStorage.getItem(Constants.TOKEN_SAVING_STRING) === null,
    wrapperDisplayName: 'UserIsNotAuthenticated'
});