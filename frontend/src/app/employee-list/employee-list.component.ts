import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id": 1,
      "firstName": "David",
      "lastName": "Mateus",
      "emailId": "david@email.com"
    },
    {
      "id": 2,
      "firstName": "Eren",
      "lastName": "Yeager",
      "emailId": "eren@email.com"
    },
    {
      "id": 3,
      "firstName": "Armin",
      "lastName": "Arlert",
      "emailId": "armin@email.com"
    },
    {
      "id": 4,
      "firstName": "Mikasa",
      "lastName": "Ackerman",
      "emailId": "mikasa@email.com"
    }];
  }

}
