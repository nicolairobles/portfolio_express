"use strict";

(function(){
	console.log("loaded");
	// debugger;

//ENEMY DETAILS
//Enemy array 
	var pokemon = [
		['Voltorb','projects/pokemon/images/voltorb.png',100],
		['Charizard','projects/pokemon/images/charizard.png',200],
		['Gyarados','projects/pokemon/images/gyarados.png',125],
		['Mew','projects/pokemon/images/mew.png',75],
		['Geodude','projects/pokemon/images/geodude.png',90],
		['Snorlax','projects/pokemon/images/snorlax.png',110],
		['Kabutops','projects/pokemon/images/kabutops.png',95],
		['Eevee','projects/pokemon/images/eevee.png',60],
		['Beedrill','projects/pokemon/images/beedrill.png',70],
		['Magikarp','projects/pokemon/images/magikarp.gif',40],
		['Gastly','projects/pokemon/images/gastly.png',50]
	];
//Choose one enemy array from pokemon[]
	var chooseEnemy = function(){
		return pokemon[Math.round(Math.random()*pokemon.length)];
	}; 
//Set enemy array to var enemy
	var enemy = chooseEnemy();
//Sets enemy Stats
	var opponentName = enemy[0];
	var opponentImage = enemy[1];
	var opponentHealth = enemy[2];
	//Name
	$("#enemy .name").text(opponentName);
	//Set Image
	$("#enemy_img").attr("src", opponentImage);
	//Set Health
	$("#enemy .health").text("Health: " + opponentHealth);
	//Set Status Text
	$("#status_text").text("A wild " + opponentName + " appeared!\nGo Pikachu! Go!");


//PIKACHU DETAILS
//Beginning pikachu health
	var pikaHealth = 100; 
//Heal Pikachu Function
	var doHeal = function(){
		var addHealth = Math.round(25 + 25*Math.random());
		pikaHealth = pikaHealth + addHealth;
		$("#pikachu .health").text("Health: " + pikaHealth);
	};
	
//enemyAttacks 
	var enemyAttack = function(){
		var chanceOfAttack = Math.round(Math.random()*100);
		var enemyDamage = Math.round(5 + 25*Math.random());
		if (chanceOfAttack <= 10){
			$("#pikachu .health").text("Health: " + pikaHealth);
			$("#status_text").text(opponentName + " missed!\nAttack or Heal!");
		} else if (chanceOfAttack => 10 ){
			pikaHealth = pikaHealth - enemyDamage;
			$("#pikachu .health").text("Health: " + pikaHealth);
			$("#status_text").text(opponentName + " did " + enemyDamage + " damage!\nAttack or Heal!");
	//Bonus animation to illustrate when Pikachu is hit
			$("#pikachu_img").animate({
				left: "+=20"
			}, 100, function() {
				$(this).animate({
					left: "-=20"
				}, 150, function(){
					$(this).animate({
						left: "+=10"
					}, 200, function(){
						$(this).animate({
							left: "-=10"
						}, 250)
					})
				});
			});
		}
		//Check if pikachu is now dead
		if (pikaHealth <= 0){
			$("#status_text").text("Game Over: You're dead Pikachu! Pika-sorry.");
			$("#pikachu_img").fadeOut(3000);			
			buttons.hide();
		} 
	};

//YouAttack Function
	var youAttack = function(){
		var chanceOfAttack = Math.round(Math.random()*100);
		var pikaDamage = Math.round(5 + 25*Math.random());
		if(chanceOfAttack <= 10){
			$("#enemy .health").text("Health: " + opponentHealth);
			$("#status_text").text("You missed!\nThe enemy will attack in 3 seconds!");
		} else if(chanceOfAttack => 10){
			opponentHealth = opponentHealth - pikaDamage;
			$("#enemy .health").text("Health: " + opponentHealth);
			$("#status_text").text("You did " + pikaDamage + " damage!\nThe enemy will attack in 3 seconds!");
	//Bonus animation to illustrate when opponent is hit
			$("#enemy_img").animate({
				left: "+=20"
			}, 100, function() {
				$(this).animate({
					left: "-=20"
				}, 150, function(){
					$(this).animate({
						left: "+=10"
					}, 200, function(){
						$(this).animate({
							left: "-=10"
						}, 250)
					})
				});
			});
		}
		//Check if opponent is now dead
		if(opponentHealth <= 0){
			$("#status_text").text("Game Over: Die " + opponentName + " , pika-die! Pika-pika!");
			setTimeout(function(){
				$("#enemy_img").addClass("dead");
    			$("#enemy_img").fadeOut(3000);
 			}, 1000)
		}
	};

//Event Listeners for Attack and Heal buttons
	var buttons = $("#attack_btn,#heal_btn");
	var healButton = $("#heal_btn");
	var attackButton = $("#attack_btn");

	var addEventListeners = function(){
		healButton.click(function(){
			doHeal();
			buttons.hide().fadeIn(4500);
			setTimeout(function() {
				enemyAttack();
		    }, 3000);
		});
		attackButton.click(function(){
			youAttack();
			if(opponentHealth <= 0 || pikaHealth <= 0){
				buttons.fadeOut();
			} else{
				buttons.hide().fadeIn(4500);
				setTimeout(function() {
					enemyAttack();
	    		}, 3000);
			}
		});
	};	

//Loads event listeners once page is loaded on browser
	$(document).ready(function(){
		addEventListeners();
	});

})(); // Ends Pokemon.js
