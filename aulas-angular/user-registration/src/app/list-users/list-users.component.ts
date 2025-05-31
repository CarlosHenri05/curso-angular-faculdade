import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'email'];

  listaUsuarios: IUser[] = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'janesmith@example.com',
    },
  ];

  dataSource: IUser[] = [];

  listarUsuarios(): void {
    this.dataSource = this.listaUsuarios.map((user) => {
      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      };
    });
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }
}
