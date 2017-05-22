import {store} from "../../components/AppPipeline";
import {updateIntl} from "react-intl-redux";
import {MessagesConstants} from "../../i18n/MessagesConstants";

export class LanguageBS {
    public constructor() {

    }

    public changeSpanishLanguage() {

        this.setLanguageEs();
    }

    public changeEnglishLanguage() {

        this.setLanguageEn();
    }

    private setLanguageEs() {
        store.dispatch(updateIntl({
            locale: "es", messages: MessagesConstants.esEsMessages
        }));
    }

    private setLanguageEn() {
        store.dispatch(updateIntl({
            locale: "en", messages: MessagesConstants.enGbMessages
        }));
    }
}