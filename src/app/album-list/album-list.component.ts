import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];
  photos: any = {};
  showPhotos: { [albumId: number]: boolean } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(
      (data: any) => {
        this.albums = data;
      },
      (error) => {
        console.error('Failed to fetch albums', error);
      }
    );
  }

  togglePhotos(albumId: number) {
    if (this.showPhotos[albumId]) {
      this.showPhotos[albumId] = false;
    } else {
      this.fetchPhotos(albumId);
      this.showPhotos[albumId] = true;
    }
  }

  fetchPhotos(albumId: number) {
    this.http
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .subscribe(
        (data: any) => {
          this.photos[albumId] = data;
        },
        (error) => {
          console.error(`Failed to fetch photos for album ${albumId}`, error);
        }
      );
  }
}
