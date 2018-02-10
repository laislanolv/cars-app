import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';

import { LoginPage } from '../login/login';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authService: AuthService) {}

    logout() {
        let logoutAlert = this.alertCtrl.create({
            title: 'Quer mesmo sair?',
            message: 'Não vá :(',
            buttons: [
            {
                text: 'Sair',
                handler: () => {
                    this.hideTabbar();
                    this.authService.logout();
                    this.navCtrl.setRoot(LoginPage);
                }
            },
            {
              text: 'Quero ficar',
              handler: () => {}
            }
          ]
        });
    
        logoutAlert.present();
    }

    hideTabbar() {
        let elem = <HTMLElement>document.querySelector(".tabbar");
        
        if (elem != null) {
            elem.style.display = 'none';
            return;
        }

        return;
    }

    ionViewCanEnter() {
        return this.authService.authenticated();
    }
}
