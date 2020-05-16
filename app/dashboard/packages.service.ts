import { Package } from './package';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PackagesService {

    packList: Package[];

    private packagesUrl = `http://localhost:60001/api/Packages`;

    private packByLocationUrl = `http://localhost:60001/api/GetPackLocation`;

    private packFilterUrl = `http://localhost:60001/api/GetPackKeyword`;

    constructor(private http: Http) { }

    getAllPackages() {
        return this.http.get(this.packagesUrl).map((response) => response.json());
    }
    searchLocation(searchL: string) {
        return this.http
            .get(`${this.packByLocationUrl}?=${searchL}`).map((response) => response.json());

    }

    filter(searchL: string, keyword: string) {
        return this.http.get(`${this.packFilterUrl}?location=${searchL}&keyword=${keyword}`).map((response) => response.json());
    }

}