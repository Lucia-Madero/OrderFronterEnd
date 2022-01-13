import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {AddFormComponent} from "./add-form/add-form.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemOverviewComponent},
  {path: 'items/add-item', component: AddFormComponent},
  {path: 'items/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
