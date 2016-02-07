import {Component, Input} from 'angular2/core';
import {Word} from './word';
import {WordComponent} from './word.component';
import {FilterBoxComponent} from './filter-box.component';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'word-list',
  directives: [FilterBoxComponent, WordComponent],
  template: `
    <div class="WordList">
      <filter-box (update)="applyFilter($event)"></filter-box>
      <div [hidden]="words === null || words.length > 0" class="Suggest">
        No results for <i>{{ filterTerm }}?</i> <strong><a href="#">Please submit a definition!</a></strong>
      </div>
      <word *ngFor="#word of words" [word]="word"></word>
    </div>`
})
export class WordListComponent {

  public words:Word[] = null;
  public filterTerm:String = '';
  private filterPipe:FilterPipe = new FilterPipe();

  applyFilter(term) {
    this.filterTerm = term;
    this.words = this.filterPipe.transform(ALL_WORDS, [this.filterTerm]);
  }
}

const ALL_WORDS: Word[] = [
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
