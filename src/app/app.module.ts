import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './component/cards/cards.component';
import { BasicPipe } from './pipe/basic.pipe';
import { ElementsModuleModule } from './module/elements-module/elements-module.module';
import { ViewModuleModule } from './module/view-module/view-module.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, CardsComponent, BasicPipe],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ElementsModuleModule,
    ViewModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
