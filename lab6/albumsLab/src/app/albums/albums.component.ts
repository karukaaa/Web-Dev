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
  @Output() albumDeleted = new EventEmitter<number>();

  constructor(private albumsService: AlbumsService){}

  ngOnInit():void{
    this.albumsService.getAlbums().subscribe(
      albums => {this.albums = albums;},
      error=>{console.error(error);}
    );
  }
}
