import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {DataEntryComponent} from "./components/data-entry/data-entry.component";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {DataEditorComponent} from "./components/data-editor/data-editor.component";
import {DataUploadingComponent} from "./components/data-uploading/data-uploading.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {path:'main', component: HomePageComponent},
  {path:'entry', component: DataEntryComponent},
  {path: 'table', component: DataTableComponent},
  {path: 'editor', component: DataEditorComponent},
  {path: 'uploading', component: DataUploadingComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
