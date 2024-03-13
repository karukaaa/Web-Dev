import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Album } from './album';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = 'https://jsonplaceholder.typicode.com/albums';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  createAlbum(newAlbum: Album):Observable<Album>{
    return this.http.post<Album>(this.url, newAlbum);
  }

  newId(albums: Album[]):number{
    const maxId = Math.max(...albums.map(album=>album.id));
    return maxId >= 0 ?maxId+1 : 0;
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.url}/${album.id}`;
    return this.http.put<Album>(url, album);
  }
}
