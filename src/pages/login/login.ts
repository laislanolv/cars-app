import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';

import { AlertHelper } from '../../helpers/alert-helper/alert-helper';
import { TabsHelper } from '../../helpers/tabs-helper/tabs-helper';

import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    loginCredentials = {email: '', password: ''};

    constructor(
        public navCtrl: NavController,
        public authService: AuthService,
        public alertHelper: AlertHelper,
        public tabsHelper: TabsHelper
    ) {}
    
    login() {
        this.alertHelper.showLoading();
        
        this.authService.login(this.loginCredentials).subscribe(allowed => {
            if (allowed) {
                this.navCtrl.setRoot(TabsPage, {}, {animate: true, animation: 'ios-transition', direction: 'forward', duration: 900});
            } else {
                this.alertHelper.showError('Dê uma conferida nos dados informados e tente de novo.');
            }
        }, error => {
            this.alertHelper.showError('Erro! Tente mais tarde.');
        });
    }
    
    ionViewWillEnter() {
        this.tabsHelper.hide();
    }
}
