import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-delivery-confrim',
  templateUrl: 'delivery-confrim.html',
})
export class DeliveryConfrimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryConfrimPage');
  }

}
