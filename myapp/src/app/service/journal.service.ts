import { Inject, Injectable } from "@angular/core";
import * as global from "../../app/globals";
import { Http, RequestOptions, Headers } from "@angular/http";
import { map } from 'rxjs/operators';
import { journalInfo } from "../entity/journalInterface";


@Injectable()
export class JournalService{

    urlPrefix:string;
    request:RequestOptions;

    constructor(private http: Http,){
        this.urlPrefix = global.urlLocal;
        let headers = new Headers({'Content-Type': 'application/json'});
        this.request = new RequestOptions({headers:headers});
    }

    submitReivew(info:journalInfo){
        let url = this.urlPrefix + "/api/journal/save";
        return this.http.post(url, JSON.stringify(info), this.request).pipe(map(res => res.json()));
    }

    fetchReview(id:string){
        let url = this.urlPrefix + "/api/journal/fetch";
        return this.http.post(url, id, this.request).pipe(map(res => res.json()));
    }
}