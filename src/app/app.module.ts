import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { LoginPage } from '../pages/login/login';
import {PasswordResetCodePage} from '../pages/password-reset-code/password-reset-code';
import {PasswordNewPage} from '../pages/password-new/password-new';
import {OrderListPage} from '../pages/order-list/order-list';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import {DeliveryConfrimPage} from '../pages/delivery-confrim/delivery-confrim';
import {AcceptOrderPage} from '../pages/accept-order/accept-order';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PasswordResetPage,
    LoginPage,
    PasswordResetCodePage,
    PasswordNewPage,
    OrderListPage,
    OrderhistoryPage,
    DeliveryConfrimPage,
    AcceptOrderPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PasswordResetPage,
    LoginPage,
    PasswordResetCodePage,
    PasswordNewPage,
    OrderListPage,
    OrderhistoryPage,
    DeliveryConfrimPage,
    AcceptOrderPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
