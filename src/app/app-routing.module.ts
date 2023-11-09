import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'posts', component: AppComponent },
  { path: 'albums', component: AlbumListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
