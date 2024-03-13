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

  // deleteAlbum():void{
  //   if(this.album){
  //     this.albumsService.deleteAlbum(this.album.id).subscribe(
  //     ()=> {this.router.navigate(['albums']);}
  //   );
  //   }else{
  //     console.error('no album');
  //   }
    
  // }
}
