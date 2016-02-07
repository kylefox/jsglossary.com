import {Pipe} from 'angular2/core';

@Pipe({
  name: 'host'
})
export class HostPipe {
  transform(value) {
    let a = document.createElement('a');
    a.href = value;
    return a.hostname;
  }
}
