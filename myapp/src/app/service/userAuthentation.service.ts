import { Injectable, Component } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import * as global from "app/globals";
import { userInfo } from "../entity/userInterface";

@Injectable()
export class AuthentationService{

    urlPrefix:string;
    request:RequestOptions;

    constructor(private http: Http,){
        this.urlPrefix = global.urlLocal;
        let headers = new Headers({'Content-Type': 'application/json'});
        this.request = new RequestOptions({headers:headers});
    }

    check(userName:string, passWord: string) {
        var user:userInfo = {
            username: userName,
            password: passWord
        }
        let url = this.urlPrefix + "/api/user/authentication";
        return this.http.post(url, user).map(res => res.json());
    }
}