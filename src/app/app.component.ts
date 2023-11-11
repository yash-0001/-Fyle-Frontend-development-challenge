import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  repositories: any[] = [];

  constructor(private http: HttpClient) {}

  searchUser(username: string) {
    const url = `https://api.github.com/users/${username}/repos`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.repositories = data;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        this.repositories = [];
      }
    );
  }
}
