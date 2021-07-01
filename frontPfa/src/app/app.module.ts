import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
import { VendeurComponentComponent } from './components/user-component/vendeur-component/vendeur-component.component';
import { ClientComponentComponent } from './components/user-component/client-component/client-component.component';
import { AjoutUserGeneralComponent } from './components/user-component/ajout-user-general/ajout-user-general.component';
import { UpdateUserGeneralComponent } from './components/user-component/update-user-general/update-user-general.component';
import { RegisterComponent } from './components/login/register/register.component';
import { GesAchatComponent } from './components/ges-achat/ges-achat.component';

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
    UserComponentComponent,
    VendeurComponentComponent,
    ClientComponentComponent,
    AjoutUserGeneralComponent,
    UpdateUserGeneralComponent,
    RegisterComponent,
    GesAchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
