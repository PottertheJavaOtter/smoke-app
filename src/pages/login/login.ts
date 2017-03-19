import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { IonDigitKeyboard, IonDigitKeyboardOptions } from './ion-digit-keyboard/ion-digit-keyboard';

import { UserService } from '../../providers/user.service';
import { StorageService } from '../../providers/storage.service';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {

  keyboardSettings: IonDigitKeyboardOptions = {
    align: 'center',
    width: '80%',
    visible: true,
    leftActionOptions: {
      iconName: 'ios-backspace-outline',
      fontSize: '1.4em'
    },
    rightActionOptions: {
      iconName: 'ios-checkmark-circle-outline',
      fontSize: '1.3em'
    },
    roundButtons: true,
    showLetters: false,
    swipeToHide: false,
    theme: 'dark'
  };

  pin: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService,
    public storageService: StorageService,
    private toastCtrl: ToastController) {
    IonDigitKeyboard.onClick.subscribe((key) => { })
  }

  numberClick(key: number) {
    this.pin += key;
    if (this.pin.length == 4) {
      this.verifyUser();
      this.pin = '';
    }
  }

  verifyUser() {
    this.userService.getUser(this.pin)
      .then(user => {
        this.storageService.saveUserSession(user);
        this.pushPage();
      })
      .catch(error => {
        this.showToastError(error);
      });
  }

  showToastError(error) {
    let toast = this.toastCtrl.create({
      message: 'Error! User not found, try again',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  pushPage() {
    this.navCtrl.push(HomePage)
  }

}
