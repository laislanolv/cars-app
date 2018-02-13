import { CONFIG } from '../../config/config';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { StorageService } from '../../providers/storage-service/storage-service';

@Injectable()
export class AuthService {
    constructor(
        public http: Http,
        public storageService: StorageService,
    ) {}
    
    login(credentials) {
        return Observable.create(observer => {
            let data = {
                email: credentials.email,
                password: credentials.password
            };

            this.http.post(CONFIG.API.URL + '/login', data).timeout(CONFIG.API.TIMEOUT).map(res => res.json()).subscribe(userData => {
                if (userData.status === 'erro') {
                    observer.next(false);
                    observer.complete();
                }

                this.storageService.setUser(userData).then(() => {
                    observer.next(true);
                    observer.complete();
                });
            }, error => {
                observer.next(false);
                observer.complete();
            });
        });
    }
    
    authenticated() {
        return this.storageService.getUser();
    }
  
    logout() {
        this.storageService.clear();
    }
}
