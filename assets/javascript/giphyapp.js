'use strict';

// Global variables
let animals = ["Elephant", "Duck", "Rhino", "Seahorse", "Kangaroo", "Bat", "Fox", "Lizard", "Snake", "Horse", "Donkey", "Dolphin", "Blue Whale", "Goldfish", "Salmon", "Grizzly Bear", "Honey Badger", "Mole", "Mouse", "Rat", "Cat", "Dog", "Hamster", "Alligator", "Monkey", "Loon"];


$(document).ready(function() {
    makeButtons();

    $('.animal-btn').on('click', function() {
        let baseURL = "http://api.giphy.com/v1/gifs/search?q=";
        let animalClicked = $(this).val();
        console.log(animalClicked);
        let APIkey = "&api_key=Ihu91b8WQG80grTn4IPF3lGNvM8VyD18";
        let limit = "&limit=";
        let limitNum = "5";
    
        let queryURL = baseURL + animalClicked + APIkey + limit + limitNum;
        
        $.ajax({url: queryURL, method: "GET"}).then(function(response) {
            for (let i = 0; i < limitNum; i++) {
                // console.log(response.data[i].images.fixed_width.url);
                let animalImg = $('<img>');
                animalImg.attr('src', response.data[i].images.original.url);
                animalImg.addClass(`${animalClicked} gif-images card-img-top p-0 img-responsive col-md-12 pb-2`);
                let animalBody = $('<div>');
                animalBody.addClass('caption');
                animalBody.append(`<h3>${animalClicked}</h3><p>testing this out heyyyyyy</p>`)
                let animalCard = $('<div>');
                animalCard.addClass('thumbnail');
                animalCard.append(animalImg);
                animalCard.append(animalBody);
                let cardCol = $('<div>');
                cardCol.addClass('col-md-4 col-xs-6');
                cardCol.append(animalCard);
                $('.animal-imgs').prepend(cardCol);
            }
        });
    
    
        
    });

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
