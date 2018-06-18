import { Inject, Injectable } from "@angular/core";
import * as global from "app/globals";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ruleInfo, requestInfo } from "../entity/userInterface";


@Injectable()
export class RuleService{

    urlPrefix:string;
    request:RequestOptions;

    constructor(private http: Http,){
        this.urlPrefix = global.urlLocal;
        let headers = new Headers({'Content-Type': 'application/json'});
        this.request = new RequestOptions({headers:headers});
    }
    

    getRuleData() {
        let url = this.urlPrefix + "/api/rule/findAll";
        return this.http.post(url, JSON.stringify("")).map(res => res.json())
    }

    saveRuleStat(info:ruleInfo) {

        let url = this.urlPrefix + "/api/rulestat/save";
        return this.http.post(url, JSON.stringify(info), this.request).map(res => res.json())
    }

    getUserScore(username : string){
        let url = this.urlPrefix + "/api/rulestat/countScore";
        return this.http.post(url, username, this.request).map(res => res.json())
    }

    findRuleState(info:requestInfo){
        let url = this.urlPrefix + "/api/rulestat/fetchStat";
        return this.http.post(url, info, this.request).map(res => res.json())       
    }
}