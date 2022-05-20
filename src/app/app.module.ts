import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { WelcomeScreenComponent } from './feature/welcome-screen/welcome-screen.component';
import { ProductServiceService } from './services/product-service.service';
import { AddNewProductComponent } from './feature/add-new-product/add-new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import { AuthModule } from './auth/auth.module';




@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }