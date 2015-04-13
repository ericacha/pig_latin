var pigLatin = function(word) {

var pig_latin = "";

//split the word into keys
var arrayLetters = word.split('');
//slice the whole word and return only the first letter ex) Hat, return 'H'
var arrayfirstLetter = word.slice(0,1);
//slice only the first letter and return the rest of the word ex) Hat, return 'at'
var arraywithoutFirstLetter = word.slice(1);

//array and new variable for if word begins with 'qu' to go at the end
var arraywithoutTwoLetters = word.slice(2);
var qu = ['q','u'];
var stringqU = "qu";


var vowels = ['a','e','i', 'o', 'u'];

    //compare each vowel in the array and add  'ay' at the end
    if ((arrayLetters[0] === vowels[0]) || (arrayLetters[0] === vowels[1]) || (arrayLetters[0] === vowels[2]) || (arrayLetters[0] === vowels[3]) || (arrayLetters[0] === vowels[4]))  {
      pig_latin = word + "ay";
      //therefore the rest of the letters are consonants
      //create array to compare the position of 'q' and 'u'
      //create new string to add to the word without the first two letters
    } else if ((arrayLetters[0] === qu[0]) && (arrayLetters[1] === qu[1])) {
      pig_latin = arraywithoutTwoLetters + stringqU + "ay";
    }
    //add two arrays together with just single first letter and word without the first letter together
    else {
        pig_latin = arraywithoutFirstLetter + arrayfirstLetter + "ay";

    }

return pig_latin;

};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = ($("input#word").val());
    var result = pigLatin(word);

    $(".word").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
