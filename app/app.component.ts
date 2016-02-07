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
      <word-list></word-list>`,
    styles: [`
      header {
        text-align: center;
        padding: 4rem 0;
      }

      h1 {
        font-size: 2rem;
        margin: 0 0 1rem 0;
        color: #2D6ED8;
        font-weight: 100;
      }
    `]
})
export class AppComponent { }
