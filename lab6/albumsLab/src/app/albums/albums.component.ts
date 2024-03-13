import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: Album[] = [];
  newTitle: string='';
  newUserId: number | undefined;

  constructor(private albumsService: AlbumsService){}

  ngOnInit():void{
    this.albumsService.getAlbums().subscribe(
      albums => {this.albums = albums;},
      error=>{console.error(error);}
    );
  }
  deleteAlbum(albumId: number):void{
    this.albumsService.deleteAlbum(albumId).subscribe(
      () => {
        this.albums = this.albums.filter(album =>album.id !== albumId);
      },
      error => {console.error(error);
      }
    )
  }

  createAlbum():void{
    if(!this.newTitle || !this.newUserId){
      console.error('Something is lacking');
      return;
    }
    
    const newAlbum: Album={
      userId: this.newUserId,
      id: 0,
      title: this.newTitle
    }
    newAlbum.id = this.albumsService.newId(this.albums);

    this.albumsService.createAlbum(newAlbum).subscribe(
      createdAlbum => {
        this.albums.push(createdAlbum);
        this.newTitle = '';
        this.newUserId = undefined;
      },
      error => {
        console.error(error);
      }
    );
  }
}
