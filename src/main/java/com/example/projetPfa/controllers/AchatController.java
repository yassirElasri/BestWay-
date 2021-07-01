package com.example.projetPfa.controllers;

import java.io.File;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.projetPfa.dao.AchatRepository;
import com.example.projetPfa.dao.ProduitResporistry;
import com.example.projetPfa.dao.UserRepository;
import com.example.projetPfa.entites.Achat;
import com.example.projetPfa.entites.Categorie;
import com.example.projetPfa.entites.Produit;
import com.example.projetPfa.entites.User;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/achat")
public class AchatController {
	@Autowired
	 AchatRepository achatRepository;
	@Autowired
	ProduitResporistry produitResporistry;
	@Autowired
	UserRepository userRepository;
	@GetMapping("/findall")
	public List<Achat> findAll(){
		return this.achatRepository.findAll();
		}
	
	@PostMapping("/add")
	public ResponseEntity<?>addUser(@RequestParam("mode_paiement")String mode_paiement,@RequestParam("produit") String produit,@RequestParam("user")String user,@RequestParam("quantite")String quantite) {
		 
		Achat achat=new Achat();
		achat.setModePaiement(mode_paiement);
		int idPro=Integer.parseInt(produit);
		  Produit pro=this.produitResporistry.findById(idPro).orElse(null);
    		achat.setProduit(pro);
    		int idUser=Integer.parseInt(user);
    		User userT=this.userRepository.findById(idUser).orElse(null);
    		achat.setUser(userT);
    		int qnt=Integer.parseInt(quantite);
    		achat.setQuantite(qnt);
    		achat.setDone(false);
		
		return new ResponseEntity<>(this.achatRepository.save(achat),HttpStatus.CREATED);
	}
	@GetMapping("/count")
	public long countCommandes(){	
			return  (this.achatRepository.count());
	}
}
