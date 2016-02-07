import {Pipe} from 'angular2/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe {
  transform(words, [term]) {
    if(!term) {
      return words;
    }
    return words.filter((word) => {
      return word.word.toLowerCase().search(term.toLowerCase()) >= 0;
    });
  }
}
