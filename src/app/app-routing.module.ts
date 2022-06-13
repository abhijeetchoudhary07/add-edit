import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'table', component:TableComponent
  },
  {
    path:"edit", component:EditComponent
  },
  {
    path:'add', component:AddComponent
  },
  {
    path:"**", component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
