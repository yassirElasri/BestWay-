package com.example.projetPfa.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.projetPfa.entites.Produit;
import com.example.projetPfa.entites.User;


@Repository
public interface UserRepository  extends JpaRepository<User,Integer> {
	List<User> findByRole(String role);
}
