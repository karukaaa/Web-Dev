import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.url);
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
}
