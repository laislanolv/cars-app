import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { CarsService } from '../../providers/cars-service/cars-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    cars: any;
    hasCars: boolean = false;
    segment: string = '0';

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public authService: AuthService,
        public carsService: CarsService
    ) {}

    getCars() {
        this.carsService.getCars().then((carsData) => {
            this.cars = [];
            this.cars = carsData;
            
            setTimeout(() => {
                this.hasCars = true;
            }, 100);
        }, error => {
          this.showToast('Erro ao listar carros. Puxe para atualizar!', 'bottom');
        });
    }

    doRefresh(refresher) {
        this.getCars();
        refresher.complete();
    }

    showToast(message, position) {
        let toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
  
        toast.present();
    }

    ionViewDidLoad() {
        this.getCars();
    }

    ionViewCanEnter() {
        return this.authService.authenticated();
    }
}
