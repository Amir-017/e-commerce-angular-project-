import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { HomeProducts } from './components/home-products/home-products';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {path:'',component:HomeProducts},
  {path:'products',component:Products},
  {path:'contact',component:Contact}
];
