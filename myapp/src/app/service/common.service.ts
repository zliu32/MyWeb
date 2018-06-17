import { Inject, Injectable } from "@angular/core";
import * as global from "app/globals";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ruleInfo, requestInfo } from "../entity/userInterface";


@Injectable()
export class CommonService{
    urlPrefix:string

    constructor(private http: Http,){
        this.urlPrefix = global.urlGlobal;
    }

    getDate(offSet:number) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new RequestOptions({headers:headers});
        let url = this.urlPrefix + "/api/common/getDate";
        return this.http.post(url, JSON.stringify(offSet), request).map(res => res.json())
    }
}