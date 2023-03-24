import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SearchTableApp';
  name = 'Angular 12';
  email = '';
  aa: boolean = false;

  users = [
    {
      id: '1',
      email: 'nadetdev@email.com',
    },
    {
      id: '2',
      email: 'yatak@email.com',
    },
    {
      id: '3',
      email: 'legoM@email.com',
    },
    {
      id: '4',
      email: 'zupper@email.com',
    },
    {
      id: '5',
      email: 'bsl@email.com',
    },
  ];

  setIndex(ii: boolean) {
    this.aa = ii;
    console.log(this.aa);
  }
}
