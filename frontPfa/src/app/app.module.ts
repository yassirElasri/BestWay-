import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrdCategorieComponent } from './components/ComCategorie/crd-categorie/crd-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCategorieComponent } from './components/ComCategorie/update-categorie/update-categorie.component';
import { AdminTempleteComponent } from './components/admin-templete/admin-templete.component';
import { ComProduitComponent } from './components/com-produit/com-produit.component';
import { AjouterProduitComComponent } from './components/com-produit/ajouter-produit-com/ajouter-produit-com.component';
import { UpdateProduitComponent } from './components/com-produit/update-produit/update-produit.component';
import { HomeTempleteComponent } from './components/home-templete/home-templete.component';
import { HomeProduitComponent } from './components/home-produit/home-produit.component';
import { DetailsProduitComponent } from './components/details-produit/details-produit.component';
import { AjoutAnnonceComponent } from './components/ajout-annonce/ajout-annonce.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponentComponent } from './components/user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CrdCategorieComponent,
    UpdateCategorieComponent,
    AdminTempleteComponent,
    ComProduitComponent,
    AjouterProduitComComponent,
    UpdateProduitComponent,
    HomeTempleteComponent,
    HomeProduitComponent,
    DetailsProduitComponent,
    AjoutAnnonceComponent,
    LoginComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
