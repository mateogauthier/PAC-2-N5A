import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  // { path: 'posts', component: ... },
  // { path: 'albums', component: AlbumListComponent },
  // { path: 'albums/photos', component: ... },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
