import {Component} from 'angular2/core';
import {FilterBoxComponent} from './filter-box.component';
import {WordListComponent} from './word-list.component';

@Component({
    selector: 'js-glossary',
    directives: [FilterBoxComponent, WordListComponent],
    template: `
      <header>
        <h1>jsGlossary</h1>
        <p>Because the JavaScript world can be confusing.</p>
        <filter-box (update)="term = $event"></filter-box>
      </header>
      <word-list [filterTerm]="term"></word-list>`
})
export class AppComponent {}
