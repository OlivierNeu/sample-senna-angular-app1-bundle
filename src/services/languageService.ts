import {Injectable} from '@angular/core';

declare const Liferay: any;

@Injectable()
export class LanguageService {

    get(key: string): string {

        if (typeof Liferay != "undefined") {
            return Liferay.Language.get(key);
        }

        return key;
    }
}
