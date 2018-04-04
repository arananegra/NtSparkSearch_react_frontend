import {ActionConstants} from "../ActionConstants";

export interface IShowSnackBarDownloadDirectSearchAction {
    type: string;
    showSnackBarDirectDownloadStarted: boolean;
}

export function ShowSnackBarDownloadDirectSearchAction(showSnackBarDirectDownloadStarted: boolean): IShowSnackBarDownloadDirectSearchAction {
    return {
        type: ActionConstants.SHOW_SNACKBAR_DOWNLOAD_DIRECT_SEARCH,
        showSnackBarDirectDownloadStarted: showSnackBarDirectDownloadStarted
    };
}
