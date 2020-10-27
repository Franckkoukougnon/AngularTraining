import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() monPost: Post;

  like = 0;
  disLike = 0;

  countSuccess() {
    return this.like > this.disLike;
  }

  countDanger() {
    return this.disLike > this.like;
  }






  constructor() { }

  ngOnInit(): void {
  }

  countLike() {
    this.like++;

  }


  countDislike() {
    this.disLike++;

  }

}
