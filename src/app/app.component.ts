import {AfterViewInit, Component} from '@angular/core';

import {environment} from '../env/environment';

import LiferayParams from '../types/LiferayParams';
import * as $ from 'jquery';

declare const Liferay: any;
const templateUrl = `${environment.path.app}/app/app.component.html`;
const styleUrls = [`${environment.path.css}/css/app.component.css`];

@Component({
    selector: 'app-root',
    templateUrl,
    styleUrls
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        $('#p_p_id' + this.params.portletNamespace + ' .loader.loader-inline').hide();
    }

    clicPrecedent() {

        if (typeof Liferay != 'undefined') {
            Liferay.Loader.require('sample-senna-angular-parcours-bundle@1.0.0/app/navigation/Precedent', (NavigationPrecedent: any) => {

                new NavigationPrecedent.default;

                console.log(NavigationPrecedent.EtapesService.getEtapes());
                console.log(NavigationPrecedent.EtapesService.isFirstStep());
                console.log(NavigationPrecedent.EtapesService.isLastStep());
            });
        }
    }

    clicSuivant() {

        if (typeof Liferay != 'undefined') {
            Liferay.Loader.require('sample-senna-angular-parcours-bundle@1.0.0/app/navigation/navigation',
                function (navigation: any) {
                    (function () {

                        navigation.default.suivant(
                            function (data: any) {
                                console.log(data);
                            }
                        );
                    })();
                });
        }
    }

    title: string = 'Team 1 - App 1';
    params: LiferayParams;
}
