import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private data:DataService) { }
  Users = {}
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.Users = data
    )
  }
  
  testMethod(){
    zmienna = 'tralalalala'
  }

  

}
