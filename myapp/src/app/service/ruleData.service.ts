import { Inject, Injectable } from "@angular/core";
import * as global from "app/globals";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ruleInfo, requestInfo } from "../entity/userInterface";


@Injectable()
export class RuleService{

    urlPrefix:string

    constructor(private http: Http,){
        this.urlPrefix = global.urlGlobal;
    }
    

    getRuleData() {
        let url = this.urlPrefix + "/api/rule/findAll";
        return this.http.post(url, JSON.stringify("")).map(res => res.json())
    }

    saveRuleStat(info:ruleInfo) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new RequestOptions({headers:headers});
        let url = this.urlPrefix + "/api/rulestat/save";
        return this.http.post(url, JSON.stringify(info), request).map(res => res.json())
    }

    getUserScore(username : string){
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new RequestOptions({headers:headers});
        let url = this.urlPrefix + "/api/rulestat/countScore";
        return this.http.post(url, username, request).map(res => res.json())
    }

    findRuleState(info:requestInfo){
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new RequestOptions({headers:headers});
        let url = this.urlPrefix + "/api/rulestat/fetchStat";
        return this.http.post(url, info, request).map(res => res.json())       
    }
}