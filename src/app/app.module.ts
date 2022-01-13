import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {NameFilterPipe} from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddFormComponent} from './add-form/add-form.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import { UpdateItemFormComponent } from './update-item-form/update-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    NameFilterPipe,
    AddFormComponent,
    ItemDetailComponent,
    UpdateItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
