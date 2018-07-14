import { Injectable, Component } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import * as global from "../../app/globals";
import { userInfo } from "../entity/userInterface";
import { map } from 'rxjs/operators';


@Injectable()
export class FcService{

    urlPrefix:string;
    request:RequestOptions;

    constructor(private http: Http,){
        this.urlPrefix = global.urlGlobal;
        let headers = new Headers({'Content-Type': 'application/json'});
        this.request = new RequestOptions({headers:headers});
    }

    sendPost(request:any, url:string) {
        let requestUrl = this.urlPrefix + url;
        return this.http.post(requestUrl, request).pipe(map(res => res.json()));
    }
}