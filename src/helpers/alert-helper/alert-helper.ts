import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class AlertHelper {
    loading: Loading;

    constructor(
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController
    ) {}

    showLoading() {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Aguarde só um pouquinho...',
            dismissOnPageChange: true
        });
        
        this.loading.present();
    }

    showToast(message, position) {
        let toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
  
        toast.present();
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