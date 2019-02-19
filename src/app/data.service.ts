import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPostsForUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+userId);
  }
}
