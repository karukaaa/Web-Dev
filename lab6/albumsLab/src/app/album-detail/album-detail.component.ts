import { Component, Input, input } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: Album | undefined;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.route.params.subscribe(
      params => {
        const albumId = params['id'];
        if(albumId){
          this.albumsService.getAlbum(+albumId).subscribe(
            album=> {this.album = album;},
            error => {console.error(error); }
          );
        }
      }
    );
  }


  saveChanges(): void {
    if (!this.album || !this.editedTitle.trim()) {
      console.error("Missing edited title or album");
      return;
    }
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.albumsService.updateAlbum(updatedAlbum).subscribe(
      () => console.log("Album title updated successfully"),
      error => console.error("Error updating album title:", error)
    );
  }
}
