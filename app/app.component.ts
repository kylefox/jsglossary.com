import {Component} from 'angular2/core';
import {WordListComponent} from './word-list.component';

@Component({
    selector: 'js-glossary',
    directives: [WordListComponent],
    template: `
      <header>
        <h1>jsGlossary</h1>
        <p>Because the JavaScript world can be confusing.</p>
        <input type="search" autofocus placeholder="Search for React, Angular, Grunt, etc.">
      </header>
      <word-list></word-list>`
})
export class AppComponent { }
