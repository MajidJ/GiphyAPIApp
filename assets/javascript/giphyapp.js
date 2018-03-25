'use strict';

// Global variables
let animals = ["Elephant", "Duck", "Rhino", "Seahorse", "Kangaroo", "Bat", "Fox", "Lizard", "Sanke", "Horse", "Donkey", "Dolphin", "Blue Whale", "Goldfish", "Salmon", "Grizzly Bear", "Honey Badger", "Mole", "Mouse", "Rat", "Cat", "Dog", "Hamster", "Alligator", "Monkey", "Loon"];


$(document).ready(function() {
    makeButtons();
});

const  makeButtons = function() {
    for (let i = 0; i < animals.length; i++) {
        let animalButton = $('<button>');
        animalButton.addClass('btn btn-primary animal-btn');
        animalButton.attr('value', animals[i]);
        animalButton.text(animals[i]);
        $('.animal-buttons').append(animalButton);
    }
    
};

$('.animal-btn').on('click', function() {
    let baseURL = "http://api.giphy.com/v1/gifs/search?q=";
    let animalClicked = $(this).val();
    console.log(animalClicked);
    let APIkey = "&api_key=Ihu91b8WQG80grTn4IPF3lGNvM8VyD18";
    let limit = "&limit=";
    let limitNum = 5;

    let queryURL = baseURL + animalClicked + APIkey + limit + limitNum;
    
    $.ajax({URL: queryURL, Method: "GET"}).then(function(response) {
        for (let i = 0; i < limitNum; i++) {
            let animalImg = $('<img>');
            animalImg.attr('src', response.data.images.fixed_width.url);
            console.log(response.data.images.fixed_width.url)
            animalImg.addClass(animalClicked);
            $('.animal-imgs').append(animalImg);
        }
    });


    
});