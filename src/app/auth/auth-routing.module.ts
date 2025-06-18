import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { ProductsComponent } from './products/products.component';
import { ProductslistesComponent } from './productslistes/productslistes.component';
import { CategoriesComponent } from './categories/categories.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsListesComponent } from './collections-listes/collections-listes.component';
import { CategorieslistesComponent } from './categorieslistes/categorieslistes.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accueil'},
    { path: 'accueil', component: AcceuilComponent, data: { title: 'Accueil | MB • METATNOVA' }},
    { path: 'profile', component: ProfileComponent, data: { title: 'Profile | MB • METATNOVA' }},
    { path: 'pannier', component: CardComponent, data: { title: 'Pannier | MB • METATNOVA' }},
    { path: 'mode-payement', component: ChekoutComponent, data: { title: 'Mode de payement | MB • METATNOVA' }},
    { path: 'products', component: ProductsComponent, data: { title: 'Détail produits | MB • METATNOVA' }},
    { path: 'products-listes', component: ProductslistesComponent, data: { title: 'Listes des produits | MB • METATNOVA' }},
    { path: 'categories', component: CategoriesComponent, data: { title: 'Détail catégaries | MB • METATNOVA' }},
    { path: 'categories-listes', component: CategorieslistesComponent, data: { title: 'Listes des catégaries | MB • METATNOVA' }},
    { path: 'collections', component: CollectionComponent, data: { title: 'Détail collections | MB • METATNOVA' }},
    { path: 'collections-listes', component: CollectionsListesComponent, data: { title: 'Listes des collections | MB • METATNOVA' }},
        
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
