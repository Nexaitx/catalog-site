import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Category } from './category/category';
import { ViewProduct } from './view-product/view-product';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about-us', component: About },
  { path: 'contact-us', component: Contact },
  { path: 'category', component: Category },
  { path: 'view-product', component: ViewProduct },
  { path: '**', redirectTo: 'home' }
];