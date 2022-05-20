import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    AddNewProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    WelcomeScreenComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }
