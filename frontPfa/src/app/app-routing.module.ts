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
const routes: Routes = [
  {path:'admin',component:AdminTempleteComponent,children :[
 {path:'categorie',component:CrdCategorieComponent},

 {path:'categorie/update/:id',component:UpdateCategorieComponent},
 {path:'produit',component:ComProduitComponent},
 {path:'produit/add',component:AjouterProduitComComponent},
 {path:'produit/update/:id',component:UpdateProduitComponent},
 {path:'user/:role',component:UserComponentComponent},
  {path:'',redirectTo:'/categorie' ,pathMatch:'full'}
  ]},



  {path:'home',component:HomeTempleteComponent,children :[
    {path:'produit',component:HomeProduitComponent},
   
    {path:'produit/details/:id',component:DetailsProduitComponent},
    {path:'produit/ajouter',component:AjoutAnnonceComponent },
     ]},
     {path:'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
