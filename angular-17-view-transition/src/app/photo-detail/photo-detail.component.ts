import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.css',
})
export class PhotoDetailComponent {
  route = inject(ActivatedRoute);
  imageUrl = `https://picsum.photos/id/${this.route.snapshot.params['id']}/600/400`;
}
