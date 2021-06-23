import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataEditorComponent } from './components/data-editor/data-editor.component';
import { DataUploadingComponent } from './components/data-uploading/data-uploading.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DataEntryComponent,
    DataTableComponent,
    DataEditorComponent,
    DataUploadingComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
