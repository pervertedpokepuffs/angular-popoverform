import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { AdGroupTableComponent } from './ad-group-table/ad-group-table.component';
import { MaxCpcFormComponent } from './max-cpc-form/max-cpc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdGroupTableComponent,
    MaxCpcFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
