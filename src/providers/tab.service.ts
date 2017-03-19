import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { Const } from './constants'
import { Tab } from '../models/tab.d';
import { TabItem } from '../models/tabItem.d';


@Injectable()
export class TabService {

    private apiUrl: string;
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(public http: Http) {
        this.apiUrl = Const.API_URL;
    }

    getTabs(): Promise<Tab[]> {
        let httpUrl = this.apiUrl + '/tab';
        return this.http.get(httpUrl)
            .toPromise()
            .then(response => response.json() as Tab[])
            .catch(this.handleError);
    }

    getTabItems(tabId): Promise<TabItem[]> {
        let httpUrl = this.apiUrl + '/tabItem/' + tabId;
        return this.http.get(httpUrl)
            .toPromise()
            .then(response => response.json() as TabItem[])
            .catch(this.handleError);
    }

    addTabItem(sku: number): Promise<TabItem> {
        // let httpUrl = this.apiUrl + '/tabItem/sku?sku=' + sku;        
        // return this.http
        //     .post(httpUrl, JSON.stringify({ name: name }), { headers: this.headers })
        //     .toPromise()
        //     .then(res => res.json().data)
        //     .catch(this.handleError);
        return null;
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}

