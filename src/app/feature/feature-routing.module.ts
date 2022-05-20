import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';
import { RoleGuard } from '../auth/guard/role.guard';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';


const routes: Routes = [
  {path:'feature',children:[
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'welcome',component:WelcomeScreenComponent,canActivate:[AuthGuard]},
    {path:'product-list',component:ProductListComponent,canActivate:[AuthGuard]},
    {path:'add-product',component:AddNewProductComponent,canActivate:[AuthGuard,RoleGuard]},
    {path:'product-details/:id',component:ProductDetailsComponent,canActivate:[AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
