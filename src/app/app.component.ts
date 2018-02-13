import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { AuthService } from '../providers/auth-service/auth-service';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public screenOrientation: ScreenOrientation,
        public authService: AuthService
    ) {
        platform.ready().then(() => {
            this.authService.authenticated().then((authenticated) => {
                if (authenticated) {
                    this.rootPage = TabsPage;
                } else {
                    this.rootPage = LoginPage;
                }
            });

            statusBar.styleDefault();
            splashScreen.hide();
            screenOrientation.lock('portrait');
        });
    }
}
