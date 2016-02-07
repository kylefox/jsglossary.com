import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'filter-box',
  template: `<input #input type="search" autofocus placeholder="Search for React, Angular, Grunt, etc." (input)="update.emit(input.value)">`
})
export class FilterBoxComponent {
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }
}
