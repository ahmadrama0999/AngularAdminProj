import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShorterApi {

    readonly rurl = 'https://api.rebrandly.com/v1/links?apikey=58762a44ddc44f75b362df1649ad3a2d&workspace=fb2c77fab11747cfb5644cdefc3aa4f8'

    constructor(private httpClient: HttpClient) {

    }

    makeShort(json: any) {
        console.log(json)
        return this.httpClient.post(this.rurl, json);
    }
}
