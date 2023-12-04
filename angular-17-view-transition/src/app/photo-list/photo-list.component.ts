import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHOTO_LIST } from '../photo';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})
export class PhotoListComponent {
  photoList = PHOTO_LIST;
}
