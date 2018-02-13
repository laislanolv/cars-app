import { Injectable } from '@angular/core';

@Injectable()
export class TabsHelper {
    constructor() {}

    hide() {
        let tabs = document.querySelectorAll('.tabbar');
        
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'none';
            });
        }
    }

    show() {
        let tabs = document.querySelectorAll('.tabbar');
        
        if (tabs !== null) {
            Object.keys(tabs).map((key) => {
                tabs[key].style.display = 'flex';
            });
        }
    }
}
