import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AppComponent, CardComponent, ListComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
