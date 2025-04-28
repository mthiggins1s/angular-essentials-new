import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // this will mark this property as 'setable' from outside the component
  @Input({required: true}) user!: User;
  // EventEmitter; object that will allow is to emit custom values through the output decorator.
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
  // we use the select property to emit a new value with event emitter
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
