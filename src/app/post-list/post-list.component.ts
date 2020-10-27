import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  maDate = new Date();

  posts: Post[] = [

    {
      id: 1,
      title: 'Post 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisici.',
      love: 6,
      date: new Date(),
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisici.',
      love: 6,
      date: new Date(),
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisici.',
      love: 6,
      date: new Date(),
    },
    {
      id: 4,
      title: 'Post 4',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisici.',
      love: 6,
      date: new Date(),
    },

  ]




  constructor() { }

  ngOnInit(): void {
  }

}
