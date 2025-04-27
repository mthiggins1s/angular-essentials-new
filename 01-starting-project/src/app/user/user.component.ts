import { Component, computed, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // this will mark this property as 'setable' from outside the component
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
  // EventEmitter; object that will allow is to emit custom values through the output decorator.
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar
  }
  // we use the select property to emit a new value with event emitter
  onSelectUser() {
    this.select.emit(this.id);
  }
}
