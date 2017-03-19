import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/finally';
// import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageService {
    constructor(private storage: Storage) { }

    saveUserSession(user) {
        this.storage.ready().then(() => {
            this.storage.set('user', user);
        });
    }
}
