import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EtlapComponent } from './etlap/etlap.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';

const routes: Routes = [
  {
    path: "",
    component: FooldalComponent
  },
  {
    path:"kapcsolat",
    component: KapcsolatComponent
  },
  {
    path: "etlap",
    component: EtlapComponent
  },
  {
    path: "etlap/:id",
    component: EtlapComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "**",
    component: FooldalComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
