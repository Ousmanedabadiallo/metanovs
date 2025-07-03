import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CollectionsListesComponent } from './collections-listes/collections-listes.component';
import { CategorieslistesComponent } from './categorieslistes/categorieslistes.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductslistesComponent } from './productslistes/productslistes.component';
import { MarquesComponent } from './marques/marques.component';
import { MarqueslistesComponent } from './marqueslistes/marqueslistes.component';
import { PasswordComponent } from './password/password.component';
import { FacturesComponent } from './factures/factures.component';

@NgModule({
    declarations: [
      AcceuilComponent,
      NavComponent,
      FooterComponent,
      ProfileComponent,
      CardComponent,
      ChekoutComponent,
      ProductsComponent,
      CategoriesComponent,
      CollectionsListesComponent,
      CategorieslistesComponent,
      CollectionComponent,
      ProductslistesComponent,
      MarquesComponent,
      MarqueslistesComponent,
      PasswordComponent,
      FacturesComponent
    ],
    imports: [
      CommonModule,
      AuthRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ]
  })
  export class AuthModule { }