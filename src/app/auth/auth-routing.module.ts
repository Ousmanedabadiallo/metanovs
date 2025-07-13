import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { CardComponent } from './card/card.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { ProductsComponent } from './products/products.component';
import { ProductslistesComponent } from './productslistes/productslistes.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieslistesComponent } from './categorieslistes/categorieslistes.component';
import { MarquesComponent } from './marques/marques.component';
import { MarqueslistesComponent } from './marqueslistes/marqueslistes.component';
import { FacturesComponent } from './factures/factures.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accueil'},
    { path: 'accueil', component: AcceuilComponent, data: { title: 'Accueil | METATNOV' }},
    { path: 'profile', component: ProfileComponent, data: { title: 'Profile | METATNOV' }},
    { path: 'facture', component: FacturesComponent, data: { title: 'facture | METATNOV' }},
    { path: 'contact', component: ContactsComponent, data: { title: 'contactez-nous | METATNOV' }},
    { path: 'password', component: PasswordComponent, data: { title: 'Modifier mot de passe | METATNOV' }},
    { path: 'pannier', component: CardComponent, data: { title: 'Pannier | METATNOV' }},
    { path: 'mode-payement', component: ChekoutComponent, data: { title: 'Mode de payement | METATNOV' }},
    { path: 'products', component: ProductsComponent, data: { title: 'Détail produit | METATNOV' }},
    { path: 'products-listes', component: ProductslistesComponent, data: { title: 'Listes des produits | METATNOV' }},
    { path: 'categories', component: CategoriesComponent, data: { title: 'Détail catégarie | METATNOV' }},
    { path: 'categories-listes', component: CategorieslistesComponent, data: { title: 'Listes des catégaries | METATNOV' }},
    { path: 'marques', component: MarquesComponent, data: { title: 'Détail marque | METATNOV' }},
    { path: 'marques-listes', component: MarqueslistesComponent, data: { title: 'Listes des marques | METATNOV' }},
        
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
