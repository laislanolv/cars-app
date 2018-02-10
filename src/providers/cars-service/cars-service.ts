import { CONFIG } from '../../config/config';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout'

@Injectable()
export class CarsService {
    constructor(public http: Http) {}
  
    getCars() {
        return new Promise((resolve, reject) => {
            this.http.get(CONFIG.API.URL + '/listaCarros').timeout(CONFIG.API.TIMEOUT).map(res => res.json()).subscribe(data => {
                let cars: any = [];
                cars = data;
                resolve(cars);
            }, error => {
                reject(error);
            });
        });
    }
}
