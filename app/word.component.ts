import {Component} from 'angular2/core';
import {Word} from './word';

@Component({
  selector: 'word',
  inputs: ['word'],
  template: `<p><strong>&mdash;{{ word.word }}:</strong> {{ word.definition}}</p>`
})
export class WordComponent {
  public word:Word;
}
