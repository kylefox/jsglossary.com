import {Pipe} from 'angular2/core';

@Pipe({
  name: 'host'
})
export class HostPipe {
  transform(url:string) {
    // TODO: Seems wrong to use global `document` ...
    let a = document.createElement('a');
    a.href = url;
    return a.hostname;
  }
}
