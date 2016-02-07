import {Component} from 'angular2/core';
import {Word} from './word';
import {HostPipe} from './host.pipe';

@Component({
  selector: 'word',
  inputs: ['word'],
  pipes: [HostPipe],
  template: `
  <div class="Word" id="Word-{{ word.key }}">
    <div class="Word-Word"><a href="#">{{ word.word }}</a></div>
    <div class="Word-Def">{{ word.definition}}</div>
    <div class="Word-Link">
      <a href="{{ word.url }}" target="_blank">{{ word.url | host }}</a>
    </div>
  </div>`
})
export class WordComponent {
  public word:Word;
}
