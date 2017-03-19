import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// App Pages
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { TabPage } from '../pages/tab/tab';

import { IonDigitKeyboard } from '../pages/login/ion-digit-keyboard/ion-digit-keyboard';
import { UserService } from '../providers/user.service';

import { IonicStorageModule } from '@ionic/storage';
import { StorageService } from '../providers/storage.service';
import { TabService } from '../providers/tab.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    IonDigitKeyboard,
    TabPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, 
    UserService,
    StorageService,
    TabService
  ]
})
export class AppModule { }
