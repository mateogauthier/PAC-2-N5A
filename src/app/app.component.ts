import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:any = 'pac-2';
  posts: any[] = [];
  comments: any = {};
  showComments: { [postId: number]: any } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Failed to fetch posts', error);
      }
    );
  }

  toggleComments(postId: number) {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      this.fetchComments(postId);
      this.showComments[postId] = true;
    }
  }

  fetchComments(postId: number) {
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .subscribe(
        (data: any) => {
          this.comments[postId] = data;
        },
        (error) => {
          console.error(`Failed to fetch comments for post ${postId}`, error);
        }
      );
  }
}
