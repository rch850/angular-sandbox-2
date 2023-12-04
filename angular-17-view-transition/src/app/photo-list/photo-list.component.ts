import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})
export class PhotoListComponent {
  photoList = [
    { id: 100, thumbnail: 'https://picsum.photos/id/100/300/200' },
    { id: 101, thumbnail: 'https://picsum.photos/id/101/300/200' },
    { id: 102, thumbnail: 'https://picsum.photos/id/102/300/200' },
  ];
}
