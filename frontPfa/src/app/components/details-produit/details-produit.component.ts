import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/Categorie';
import { Produit } from 'src/app/model/Produit';
import { ProduitServiceService } from 'src/app/services/produit-service.service';
import{AchatServiceService} from 'src/app/services/achat-service.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
id:string
produit:Produit;
formQuantite:FormGroup;
modePayment:string;
idUserCon:any
  constructor(private httpServiceProduit :ProduitServiceService  ,private rout:ActivatedRoute,private construireForm:FormBuilder,private router:Router,private toastr:ToastrService,private AchatService:AchatServiceService) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.paramMap.get('id');
      this.httpServiceProduit.findProduit(+this.id).subscribe(cat=>this.produit=cat);
      this.formQuantite=this.construireForm.group({
        quantite:['1',],
      
        });
  }
  payerEnligne(){

this.modePayment="en ligne";
this.idUserCon = sessionStorage.getItem('idUserConnecte');
const formData=new FormData();

formData.append('mode_paiement',this.modePayment);
formData.append('user',this.idUserCon);
formData.append('produit',this.id);
formData.append('quantite',this.formQuantite.value.quantite);

this.AchatService.addAchat(formData).subscribe();
this.router.navigate(['/home/produit/']);
this.toastr.success('L achat à été bien effectué','Succès',{
  timeOut:2200,
  progressBar:true
}) }
payerCash(){

  this.modePayment="à la livraison";
  this.idUserCon = sessionStorage.getItem('idUserConnecte');
  const formData=new FormData();
  
  formData.append('mode_paiement',this.modePayment);
  formData.append('user',this.idUserCon);
  formData.append('produit',this.id);
  formData.append('quantite',this.formQuantite.value.quantite);
  
  this.AchatService.addAchat(formData).subscribe();
  this.router.navigate(['/home/produit']);
  this.toastr.success('l achat à été bien effectué','Succès',{
    timeOut:2200,
    progressBar:true
  })
  }

}
