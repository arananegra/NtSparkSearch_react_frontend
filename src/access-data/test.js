import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect'
import { routerActions } from 'react-router-redux'

import { Loading } from './components'

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => state.user.data !== null,
    authenticatingSelector: state => state.user.isLoading,
    AuthenticatingComponent: Loading,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/login',
    allowRedirectBack: false,
    // Want to redirect the user when they are done loading and authenticated
    authenticatedSelector: state => state.user.data === null && state.user.isLoading === false,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated'
});