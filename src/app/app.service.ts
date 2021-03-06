import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    constructor (private http: Http) {}
    // private url = `https://api.github.com/repos/angular/angular/issues`;
    // private url = './app/issues.json';

    extractData(res: Response){
        return res.json();
    }
    getData(url: string){
        return this.http.get(url);
    }
}
