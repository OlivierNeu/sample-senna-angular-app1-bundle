import {AfterViewInit, Component} from '@angular/core';

import LiferayParams from '../types/LiferayParams';
import * as $ from 'jquery';

declare const Liferay: any;

@Component({
    selector: 'app-root',
    templateUrl: '/o/sample-senna-angular-app1-bundle/app/app.component.html',
    styleUrls: ['/o/sample-senna-angular-app1-bundle/css/app.component.css']
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
