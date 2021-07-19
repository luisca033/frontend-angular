import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './components/get-data/get-data.component';
import { PostDataComponent } from './components/post-data/post-data.component';

const routes: Routes = [
  {
    path:'create', component:PostDataComponent
  },
  {
    path:'list', component:GetDataComponent
  },
  {
    path:'**', pathMatch:'full', redirectTo:'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
