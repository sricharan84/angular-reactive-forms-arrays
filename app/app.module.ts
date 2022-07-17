import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilterOutRemovedPipe } from './filter-out-removed.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, FilterOutRemovedPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
