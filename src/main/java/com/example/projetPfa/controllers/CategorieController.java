package com.example.projetPfa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projetPfa.dao.CategorieResporistry;
import com.example.projetPfa.entites.Categorie;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/categorie")
public class CategorieController {
	@Autowired
	 CategorieResporistry categorietRespositry;
	@GetMapping("/findall")
	public List<Categorie> findAll(){
		return this.categorietRespositry.findAll();}
	@PostMapping("/add")
	public ResponseEntity<?>addUser(@RequestBody Categorie categorie){
		return new ResponseEntity<>(this.categorietRespositry.save(categorie),HttpStatus.CREATED);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>addUser(@PathVariable Integer id){
		if(this.categorietRespositry.findById(id).isPresent()) {
			this.categorietRespositry.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<?>updateUser(@PathVariable Integer id,@RequestBody Categorie categorie){
		if(this.categorietRespositry.findById(id).isPresent()) {
			categorie.setId(id);
			this.categorietRespositry.save(categorie);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<?>findUser(@PathVariable Integer id){
		if(this.categorietRespositry.findById(id).isPresent()) {
			
			return new ResponseEntity<>(this.categorietRespositry.findById(id),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/count")
	public long countCategorie(){	
			return  (this.categorietRespositry.count());
	}
}






