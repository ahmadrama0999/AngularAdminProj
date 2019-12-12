import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShorterApi {

    readonly rurl = 'https://api.rebrandly.com/v1/links?apikey=5fcbcc93c08c4fda8ab836c7a9e76cab&workspace=fb2c77fab11747cfb5644cdefc3aa4f8'

    constructor(private httpClient: HttpClient) {

    }

    makeShort(url: any) {
        return this.httpClient.post(this.rurl, url);
    }
}