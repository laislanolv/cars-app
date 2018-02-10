import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    loading: Loading;
    loginCredentials = { email: '', password: '' };

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public authService: AuthService
    ) {}
    
    login() {
        this.showLoading();
        
        this.authService.login(this.loginCredentials).subscribe(allowed => {
            if (allowed) {
                this.navCtrl.setRoot(TabsPage, {}, { animate: true, animation: 'ios-transition', direction: 'forward', duration: 900 });
          } else {
            this.showError("Dê uma conferida nos dados informados e tente de novo.");
          }
        }, error => {
          this.showError(error);
        });
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Aguarde só um pouquinho...',
            dismissOnPageChange: true
        });
        
        this.loading.present();
    }

    showError(text) {
        this.loading.dismiss();
      
        let alert = this.alertCtrl.create({
            title: 'Ops!',
            message: text,
            buttons: ['Ok']
        });
        
        alert.present();
    }
}
