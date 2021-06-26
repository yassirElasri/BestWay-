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

import com.example.projetPfa.dao.UserRepository;
import com.example.projetPfa.entites.Categorie;
import com.example.projetPfa.entites.Produit;
import com.example.projetPfa.entites.User;

@CrossOrigin("http://localhost:4200")

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserRepository userRespositry;
	@GetMapping("/findall")
	public List<User> findAll(){
		return this.userRespositry.findAll();}
	@PostMapping("/add")
	public ResponseEntity<?>addUser(@RequestBody User user){
		return new ResponseEntity<>(this.userRespositry.save(user),HttpStatus.CREATED);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>addUser(@PathVariable Integer id){
		if(this.userRespositry.findById(id).isPresent()) {
			this.userRespositry.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<?>updateUser(@PathVariable Integer id,@RequestBody User user){
		if(this.userRespositry.findById(id).isPresent()) {
			user.setId(id);
			this.userRespositry.save(user);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/find/{id}")
	public ResponseEntity<?>findUser(@PathVariable Integer id){
		if(this.userRespositry.findById(id).isPresent()) {
			
			return new ResponseEntity<>(this.userRespositry.findById(id),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/findbyRole/{role}")
	public List<User> findproByNom(@PathVariable String role){
		return this.userRespositry.findByRole(role);
		}
}
