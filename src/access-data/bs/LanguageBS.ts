import {store} from "../../components/AppPipeline";
import {updateIntl} from "react-intl-redux";
import {MessagesConstants} from "../../i18n/MessagesConstants";

export class LanguageBS {
    public constructor() {

    }

    public changeSpanishLanguage() {
        this.setLanguageSpanish();
    }

    public changeEnglishLanguage() {
        this.setLanguageEnglish();
    }

    private setLanguageSpanish() {
        store.dispatch(updateIntl({
            locale: "es", messages: MessagesConstants.esEsMessages
        }));
    }

    private setLanguageEnglish() {
        store.dispatch(updateIntl({
            locale: "en", messages: MessagesConstants.enGbMessages
        }));
    }
}