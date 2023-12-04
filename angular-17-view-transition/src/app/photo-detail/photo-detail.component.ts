import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PHOTO_LIST } from '../photo';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.css',
})
export class PhotoDetailComponent {
  route = inject(ActivatedRoute);
  photoId = this.route.snapshot.params['id'];
  imageUrl = PHOTO_LIST.find((p) => p.id === Number(this.photoId))?.large;
}
