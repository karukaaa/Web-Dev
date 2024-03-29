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

    this.albumsService.updateAlbum(this.album.id, this.album.userId ,  this.editedTitle).subscribe(
      updatedAlbum => {
        this.album = updatedAlbum;
        this.editedTitle = '';
      },
      error => console.error(error)
    );
  }

  goBack(): void{
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    this.router.navigate(['photos'], { relativeTo: this.route });
  }
}