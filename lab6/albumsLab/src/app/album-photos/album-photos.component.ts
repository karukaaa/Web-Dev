import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../photo';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos$!: Observable<Photo[]> | undefined;
  albumId: number | undefined;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.albumId = +params['id'];
  //     if (this.albumId) {
  //       this.photos$ = this.albumsService.getPhotosByAlbumId(this.albumId);
  //     }
  //   });
  // }
    goBack(): void{
    this.router.navigate(['/albums']);
  }
}
