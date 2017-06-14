import {TestAxiosQDAO} from "../access-data/dao/TestAxiosQDAO";
import {LoadSimpleApiSuccessAction} from "./LoadSimpleApiSuccessAction";


export function LoadSimpleAction() {
    return function (dispatch) {
        return new TestAxiosQDAO().testSimpleAxios()
            .then(textFromApi => {
                dispatch(LoadSimpleApiSuccessAction(textFromApi));
            }).catch(error => {
                throw (error);
            })
    }
}