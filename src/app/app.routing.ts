import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './partials/landing/landing.component';
import { LoginComponent } from './partials/login/login.component';
import { ProfileComponent } from './partials/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RegisterComponent } from './partials/register/register.component';
import { ProductComponent } from './partials/product/product.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'login',       component: LoginComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'register',     component: RegisterComponent },
    { path: 'product',     component: ProductComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
