import { Pipe, PipeTransform } from '@angular/core';
import { ShorterApi } from './ShorterApi.service'

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

    this.shorterApi.makeShort(obj).subscribe((data: any) =>
      this.shortLink = data.shortUrl
    );
  }
}