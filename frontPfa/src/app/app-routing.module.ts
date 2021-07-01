import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTempleteComponent } from './components/admin-templete/admin-templete.component';
import { AjouterProduitComComponent } from './components/com-produit/ajouter-produit-com/ajouter-produit-com.component';
import { ComProduitComponent } from './components/com-produit/com-produit.component';
import { CrdCategorieComponent } from './components/ComCategorie/crd-categorie/crd-categorie.component';
import { UpdateCategorieComponent } from './components/ComCategorie/update-categorie/update-categorie.component';
import { UpdateProduitComponent } from './components/com-produit/update-produit/update-produit.component';
import { HomeTempleteComponent } from './components/home-templete/home-templete.component';
import { HomeProduitComponent } from './components/home-produit/home-produit.component';
import { DetailsProduitComponent } from './components/details-produit/details-produit.component';
import { AjoutAnnonceComponent } from './components/ajout-annonce/ajout-annonce.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import{ VendeurComponentComponent} from './components/user-component/vendeur-component/vendeur-component.component';
import{ClientComponentComponent} from './components/user-component/client-component/client-component.component';
import{AjoutUserGeneralComponent} from './components/user-component/ajout-user-general/ajout-user-general.component';
import{UpdateUserGeneralComponent} from './components/user-component/update-user-general/update-user-general.component';
import{RegisterComponent} from'./components/login/register/register.component';
import{GesAchatComponent} from'./components/ges-achat/ges-achat.component'
const routes: Routes = [
  {path:'admin',component:AdminTempleteComponent,children :[
 {path:'categorie',component:CrdCategorieComponent},

 {path:'categorie/update/:id',component:UpdateCategorieComponent},
 {path:'produit',component:ComProduitComponent},
 {path:'produit/add',component:AjouterProduitComComponent},
 {path:'produit/update/:id',component:UpdateProduitComponent},
 {path:'user/admin',component:UserComponentComponent},
 {path:'user/vendeur',component:VendeurComponentComponent},
 {path:'user/client',component:ClientComponentComponent},
 {path:'user/admin/add',component:AjoutUserGeneralComponent},
 {path:'user/vendeur/add',component:AjoutUserGeneralComponent},
 {path:'user/client/add',component:AjoutUserGeneralComponent},
 {path:'user/admin/update/:id',component:UpdateUserGeneralComponent},
 {path:'user/vendeur/update/:id',component:UpdateUserGeneralComponent},
 {path:'user/client/update/:id',component:UpdateUserGeneralComponent},
 {path:'commandes',component:GesAchatComponent},
 
 
  ]},

 {path:'',redirectTo:'home/produit' ,pathMatch:'full'},

  {path:'home',component:HomeTempleteComponent,children :[
    {path:'produit',component:HomeProduitComponent},
   
    {path:'produit/details/:id',component:DetailsProduitComponent},
    {path:'produit/ajouter',component:AjoutAnnonceComponent },
     ]},
     {path:'home/login',component:LoginComponent },
     {path:'home/login/register',component:RegisterComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
