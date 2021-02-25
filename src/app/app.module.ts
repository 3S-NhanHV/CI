import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/until/material-module';
import { LoadingComponent } from './component/loading/loading.component';
import { HomeComponent } from './page/home/home.component';
import { BackendService } from './core/service/backend-service/backend-service.service';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './root-store/home/home.efffect';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './root-store/home/home.reducer';
import { HttpClientModule } from '@angular/common/http';
import { HomeEffects2 } from './root-store/home2/home.efffect';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      listData: dataReducer,
    }),
    EffectsModule.forRoot([HomeEffects,HomeEffects2]),
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
