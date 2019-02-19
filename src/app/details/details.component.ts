import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: number
  userDetails: Object
  userPosts: Object

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      p => this.userId = p.id
    )
  }

  ngOnInit() {

    // this.userDetails = this.data.getUser(this.userId)



    this.data.getUser(this.userId).subscribe(
      data => this.userDetails = data
    )

    this.data.getPostsForUser(this.userId).subscribe(
      data => this.userPosts = data
    )


  }

}
