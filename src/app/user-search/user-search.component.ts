import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent {
  @Output() searchUser = new EventEmitter<string>();
  username: string = '';

  onSearch() {
    this.searchUser.emit(this.username);
  }
}

