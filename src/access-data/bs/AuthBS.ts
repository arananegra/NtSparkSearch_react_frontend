import {connectedRouterRedirect} from "redux-auth-wrapper/history3/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history3/locationHelper";

const locationHelper = locationHelperBuilder({});


export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: (state) => sessionStorage.getItem("token") !== null,
    wrapperDisplayName: 'UserIsAuthenticated',
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || "/",
    allowRedirectBack: false,
    authenticatedSelector: state => sessionStorage.getItem("token") === null,
    wrapperDisplayName: 'UserIsNotAuthenticated'
});