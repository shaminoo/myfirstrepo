import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { Newcomponent3Component } from './newcomponent3/newcomponent3.component';
@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    Newcomponent2Component,
    Newcomponent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyNewComponentComponent]
})
export class AppModule { }
