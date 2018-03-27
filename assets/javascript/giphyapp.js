'use strict';

// Global variables
let animals = ["Elephant", "Duck", "Rhino", "Kangaroo", "Bat", "Fox", "Lizard", "Snake", "Horse", "Donkey", "Dolphin", "Blue Whale", "Goldfish", "Salmon", "Grizzly Bear", "Honey Badger", "Mole", "Mouse", "Rat", "Cat", "Dog", "Hamster", "Alligator", "Monkey"];


$(document).ready(function() {
    makeButtons();
});


$(document).on('click', '.animal-btn', function() {
    let baseURL = "https://api.giphy.com/v1/gifs/search?q=";
    let animalClicked = $(this).val();
    console.log(animalClicked);
    let APIkey = "&api_key=Ihu91b8WQG80grTn4IPF3lGNvM8VyD18";
    let limit = "&limit=";
    let limitNum = "10";

    let queryURL = baseURL + animalClicked + APIkey + limit + limitNum;
    console.log(queryURL);
    
    $.ajax({url: queryURL, method: "GET"}).then(function(response) {
        for (let i = 0; i < limitNum; i++) {
            // console.log(response.data[i].images.fixed_width.url);
            let animalImg = $('<img>');
            animalImg.attr('src', response.data[i].images.original_still.url);
            animalImg.addClass(`${animalClicked} gif-images card-img-top p-0 img-responsive col-md-12 pb-2`);
            let animalBody = $('<div>');
            animalBody.addClass('caption pl-3 pt-2');
            animalBody.append(`<h3>${animalClicked}</h3><p>Rating: ${response.data[i].rating}</p>`);
            let animalCard = $('<div>');
            animalCard.addClass('card img-cards mt-2');
            animalCard.append(animalImg);
            animalCard.append(animalBody);

            let downloadLink = $('<a download>');
            downloadLink.attr('target', '_blank');
            downloadLink.attr("href", response.data[i].images.original.url);
            let downloadButton = $('<button>');
            downloadButton.addClass('btn animal-btn mb-3 mx-3');
            downloadButton.text("Download");
            downloadLink.append(downloadButton);

            animalCard.append(downloadLink);

            let cardCol = $('<div>');
            cardCol.addClass('');
            cardCol.append(animalCard);
            
            $('.animal-imgs').prepend(cardCol);
        }
    });
    
});

const  makeButtons = function() {
    for (let i = 0; i < animals.length; i++) {
        let animalButton = $('<button>');
        animalButton.addClass('btn animal-btn my-2 mx-2');
        animalButton.attr('value', animals[i]);
        animalButton.text(animals[i]);
        $('.animal-buttons').append(animalButton);
    }
    
};

$(document).on('click', 'img', function() {
    let src = $(this).attr("src");
    console.log(src);
  if($(this).hasClass('play')){
     //stop gif animation
     $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
     $(this).removeClass('play');
  } else {
    //start gif animation
    $(this).addClass('play');
    $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
  }
});


$('.new-animal').submit(function() {
    event.preventDefault();
    let addInput = $('input').val();
    let animalButton = $('<button>');
        animalButton.addClass('btn animal-btn my-2 mx-2');
        animalButton.attr('value', addInput);
        animalButton.text(addInput);
        $('.animal-buttons').append(animalButton);
    $('input').val('');
});