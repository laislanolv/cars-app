import { Component } from '@angular/core';

import { AuthService } from '../../providers/auth-service/auth-service';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root = HomePage;
    tab2Root = AboutPage;
    
    constructor(
        public authService: AuthService
    ) {}

    ionViewCanEnter() {
        this.authService.authenticated().then((authenticated) => {
            if (authenticated) {
                return true;
            }

            return false;
        });
    }
}
