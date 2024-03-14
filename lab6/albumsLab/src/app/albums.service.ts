import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Album } from './album';
import { map } from 'rxjs';
import { Photo } from './photo';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = 'https://jsonplaceholder.typicode.com/albums';
  photosUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos'


  constructor(private http: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.url);
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl);
  }
  
  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    const albumPhotosUrl = `${this.url}/albums/${albumId}/photos`;
    return this.http.get<Photo[]>(albumPhotosUrl);
  }

  getAlbum(albumId:number):Observable<Album | undefined>{
    return this.getAlbums().pipe(
      map(albums => albums.find(album => album.id===albumId))
    );
  }

  deleteAlbum(albumId: number):Observable<void>{
    const url = `${this.url}/${albumId}`;
    return this.http.delete<void>(url);
  }

  createAlbum(newAlbum: Album):Observable<Album>{
    return this.http.post<Album>(this.url, newAlbum);
  }

  newId(albums: Album[]):number{
    const maxId = Math.max(...albums.map(album=>album.id));
    return maxId >= 0 ?maxId+1 : 0;
  }

  updateAlbum(albumId: number, newTitle: string): Observable<Album> {
    const albumUrl = `${this.url}/${albumId}`;
    return this.http.put<Album>(albumUrl, { title: newTitle });
  }

}
