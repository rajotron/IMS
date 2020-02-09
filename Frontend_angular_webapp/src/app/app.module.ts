
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DialogOverviewExampleDialog } from './dashboard/dashboard.component';
import { DialogOverviewExampleDialog2 } from './dashboard/dashboard.component';
import { DialogOverviewExampleDialog3 } from './dashboard/dashboard.component';
import { AuthGuardService } from "./services/guards/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialog2,
    DialogOverviewExampleDialog3,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog, DialogOverviewExampleDialog2, DialogOverviewExampleDialog3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
