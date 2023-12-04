import { Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent,
    title: 'Photo list',
  },
  {
    path: 'photos/:id',
    component: PhotoDetailComponent,
    title: 'Photo detail',
  },
];
