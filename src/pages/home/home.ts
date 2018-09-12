import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NovidadePage } from '../novidade/novidade';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoNovidade(){
    this.navCtrl.push(NovidadePage);
  }

}
