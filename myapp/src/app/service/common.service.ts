import { Inject, Injectable } from "@angular/core";
import * as global from "../../app/globals";
import { Http, RequestOptions, Headers } from "@angular/http";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable()
export class CommonService{

    urlPrefix:string;
    request:RequestOptions;

    constructor(private http: Http,){
        this.urlPrefix = global.urlLocal;
        let headers = new Headers({'Content-Type': 'application/json'});
        this.request = new RequestOptions({headers:headers});
    }

    getDate(offSet:number) {
        let url = this.urlPrefix + "/api/common/getDate";
        return this.http.post(url, JSON.stringify(offSet), this.request).pipe(map(res => res.json()));
    }
}