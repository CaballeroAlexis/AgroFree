import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableExampleComponent } from './table-example/table-example.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table-example', component: TableExampleComponent },
    
  ];
  
@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TableExampleComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
})

export class AppModule {
}
