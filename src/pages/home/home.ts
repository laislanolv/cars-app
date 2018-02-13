import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { CarsService } from '../../providers/cars-service/cars-service';

import { AlertHelper } from '../../helpers/alert-helper/alert-helper';

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
        public authService: AuthService,
        public carsService: CarsService,
        public alertHelper: AlertHelper
    ) {}

    getCars() {
        this.carsService.getCars().then((carsData) => {
            this.cars = [];
            this.cars = carsData;
            
            setTimeout(() => {
                this.hasCars = true;
            }, 100);
        }, error => {
            this.alertHelper.showToast('Erro ao listar carros. Puxe para atualizar!', 'bottom');
        });
    }

    doRefresh(refresher) {
        this.getCars();
        refresher.complete();
    }

    ionViewDidLoad() {
        this.getCars();
    }

    ionViewCanEnter() {
        this.authService.authenticated().then((authenticated) => {
            if (authenticated) {
                return true;
            }

            return false;
        });
    }
}
