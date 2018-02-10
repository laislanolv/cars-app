import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageLoader } from 'ionic-image-loader';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthService } from '../providers/auth-service/auth-service';
import { CarsService } from '../providers/cars-service/cars-service';
import { StorageService } from '../providers/storage-service/storage-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        HomePage,
        LoginPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicImageLoader.forRoot(),
        IonicStorageModule.forRoot({
          name: '__cars',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        HomePage,
        LoginPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthService,
        CarsService,
        StorageService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})

export class AppModule {}
