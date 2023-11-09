import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './models/post';
import { Comment } from './models/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'pac-2';
  posts: Post[] = [];
  comments: Comment[] = [];
  showComments: { [postId: number]: boolean } = {};

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.fetchPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
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
    this.postService.fetchComments(postId).subscribe((data: Comment[]) => {
      this.comments = data;
    });
  }

}
