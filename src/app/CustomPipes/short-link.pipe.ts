import { Pipe, PipeTransform } from '@angular/core';
import { ShorterApi } from './ShorterApi.service'
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'shortLink'
})
export class ShortLinkPipe implements PipeTransform {


  constructor(private shorterApi: ShorterApi) {

  }

  shortLink: string;
  // TODO 
  transform(url: string) {
    const obj = {
      destination: url
    };
    const _subject = new BehaviorSubject('-');
    this.shorterApi.makeShort(obj).subscribe((data: any) => {
      this.shortLink = data.shortUrl;
      console.log(this.shortLink)
      _subject.next(data.shortUrl);
    }
    );

    return _subject
  }

}