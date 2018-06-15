import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './templates/welcome/welcome.component';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';
import { DisclaimerDialogComponent } from './dialogs/disclaimer-dialog/disclaimer-dialog.component';
import { PrivacypolicyDialogComponent } from './dialogs/privacypolicy-dialog/privacypolicy-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    DisclaimerDialogComponent,
    PrivacypolicyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    DisclaimerDialogComponent,
    PrivacypolicyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
