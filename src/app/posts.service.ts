import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { Comment } from './models/comments';
import { apiroute } from './environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  apiRoute = apiroute;

  fetchPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiRoute}/posts`);
  }

  fetchComments(postId: number)  : Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiRoute}/posts/${postId}/comments`);
  }
}
