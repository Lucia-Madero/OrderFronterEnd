import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {ItemFormComponent} from "./item-form/item-form.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemOverviewComponent},
  {path: 'items/add-item', component: ItemFormComponent},
  {path: 'items/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
