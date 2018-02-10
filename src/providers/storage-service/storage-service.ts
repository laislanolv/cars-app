import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
@Injectable()
export class StorageService {
    KEYS = {
        CURRENT_USER: 'current_user'
    }

    constructor(public storage: Storage) {}
    
    setUser(userData: any) {
        return this.storage.set(this.KEYS.CURRENT_USER, userData);
    }

    getUser() {
        return this.storage.get(this.KEYS.CURRENT_USER);
    }

    remove(key: string) {
        return this.storage.remove(key);
    }

    clear() {
        return this.storage.clear();
    }
}
