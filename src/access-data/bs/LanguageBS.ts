import {store} from "../../components/AppPipeline";
import {updateIntl} from "react-intl-redux";
import {MessagesConstants} from "../../i18n/MessagesConstants";

export class LanguageBS {
    public constructor() {

    }

    public changeSpanishLanguage() {

        this.setLanguage();
    }

    private setLanguage() {
        store.dispatch(updateIntl({
            locale: "es", messages: MessagesConstants.esEsMessages
        }));
    }
}