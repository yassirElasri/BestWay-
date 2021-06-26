package com.example.projetPfa;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class configSecurity extends WebSecurityConfigurerAdapter {
	@Override
	public void configure(HttpSecurity httpSecurity) throws Exception{
		//auth2.0
		/*httpSecurity.antMatcher("/achter").authorizeRequests()
		.antMatchers("/").permitAll()
		.anyRequest().authenticated().and().oauth2Login();*/
	//normat	
		/*
		httpSecurity.formLogin();
		httpSecurity.authorizeRequests().anyRequest().authenticated();*/
		 httpSecurity.cors().and().csrf().disable();
	}

}
