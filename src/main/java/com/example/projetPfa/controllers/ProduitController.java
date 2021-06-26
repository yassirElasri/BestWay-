package com.example.projetPfa.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.projetPfa.dao.CategorieResporistry;
import com.example.projetPfa.dao.ProduitResporistry;
import com.example.projetPfa.entites.Categorie;
import com.example.projetPfa.entites.Produit;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nimbusds.oauth2.sdk.Response;

@RestController
@RequestMapping("/produit")
public class ProduitController {
	@Autowired
	 ProduitResporistry produittRespositry;
	@Autowired
	 CategorieResporistry categorietRespositry;
	@Autowired ServletContext context;
	@GetMapping("/findall")
	public List<Produit> findAll(){
		return this.produittRespositry.findAll();
		}
	@PostMapping("/add/{id}")
	/*
	public ResponseEntity<?>addUser(@RequestBody Produit produit,@PathVariable int id){
	
		/*if (null == cat) {
			 cat=this.categorietRespositry.findById(1).orElse(null);
        }
		  cat.setNom(produit.getCategorie().getNom());
		*/
		/*
		//Categorie cat=this.categorietRespositry.findById(id).orElse(null);
		produit.setCategorie(cat);
		return new ResponseEntity<>(this.produittRespositry.save(produit),HttpStatus.CREATED);
	}*/

	public ResponseEntity<?>addUser(@RequestParam("file") MultipartFile file,@RequestParam("produit") String produit,@PathVariable int id) throws JsonParseException , JsonMappingException , Exception{
		 Produit pro = new ObjectMapper().readValue(produit, Produit.class);
		System.out.println("Ok .............");
       
        boolean isExit = new File(context.getRealPath("/Images/")).exists();
        if (!isExit)
        {
        	new File (context.getRealPath("/Images/")).mkdir();
        	System.out.println("mk dir.............");
        }
        String filename = file.getOriginalFilename();
        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
        File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
        try
        {
        	System.out.println("Image");
        	 FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
        	 
        }catch(Exception e) {
        	e.printStackTrace();
        }

     
        pro.setImage(newFileName);
       
     Categorie cat=this.categorietRespositry.findById(id).orElse(null);
      		pro.setCategorie(cat);
		
		
		return new ResponseEntity<>(this.produittRespositry.save(pro),HttpStatus.CREATED);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>addUser(@PathVariable Integer id){
		if(this.produittRespositry.findById(id).isPresent()) {
			this.produittRespositry.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@PutMapping("/update/{id}/{idCat}")
	public ResponseEntity<?>updateUser(@RequestParam(value="file",required=false) MultipartFile file,@RequestParam("produit") String produit,@PathVariable int id,@PathVariable int idCat) throws JsonParseException , JsonMappingException , Exception{
		if(this.produittRespositry.findById(id).isPresent()) {
			 Produit pro = new ObjectMapper().readValue(produit, Produit.class);
				
		       
				if(file!=null){
		        	 String filename = file.getOriginalFilename();
		        
		        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
		        File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
		        try
		        {
		        	System.out.println("Image");
		        	 FileUtils.writeByteArrayToFile(serverFile,file.getBytes());
		        	 
		        }catch(Exception e) {
		        	e.printStackTrace();
		        }

		     
		        pro.setImage(newFileName);}
				else {
					Produit ProImage=this.produittRespositry.findById(id).orElse(null);
					 pro.setImage(ProImage.getImage());
					
				}
				
		       
		     Categorie cat=this.categorietRespositry.findById(idCat).orElse(null);
		      		pro.setCategorie(cat);
			pro.setId(id);
			this.produittRespositry.save(pro);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<?>findUser(@PathVariable Integer id){
		if(this.produittRespositry.findById(id).isPresent()) {
			
			return new ResponseEntity<>(this.produittRespositry.findById(id),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/getImage/{id}")
	public byte[] getImage(@PathVariable Integer id) throws Exception{
		Produit produit=this.produittRespositry.findById(id).get();
		return Files.readAllBytes(Paths.get(context.getRealPath("/Images/")+produit.getImage() ));
		
	}
	@GetMapping("/produitByCat/{id}")
	public List<Produit> findproByCat(@PathVariable String id){
		return this.produittRespositry.findByCategorieNom(id);
		}
	@GetMapping("/produitByName/{nom}")
	public List<Produit> findproByNom(@PathVariable String nom){
		return this.produittRespositry.findByNomContains(nom);
		}

}
