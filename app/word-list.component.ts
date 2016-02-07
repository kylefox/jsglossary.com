import {Component, Input} from 'angular2/core';
import {Word} from './word';
import {WordComponent} from './word.component';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'word-list',
  pipes: [FilterPipe],
  directives: [WordComponent],
  template: `
    <div class="WordList">
      <word *ngFor="#word of words | filter : filterTerm" [word]="word"></word>
    </div>`
})
export class WordListComponent {
  @Input() filterTerm;
  public words:Word[] = WORDS;
}

var WORDS: Word[] = [
  {
    key: 'angular',
    word: 'Angular',
    definition: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://angularjs.org/'
  },
  {
    key: 'babel',
    word: 'Babel',
    definition: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://babeljs.io/'
  },
  {
    key: 'react',
    word: 'React',
    definition: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'http://facebook.github.io/'
  },
];
