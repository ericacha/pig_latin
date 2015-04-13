var scrabble = function(word) {

var pig_latin = "";

//split the word into keys
var arrayLetters = word.split('');
//slice the whole word and return only the first letter ex) Hat, return 'H'
var arrayfirstLetter = word.slice(0,1);
//slice only the first word and return the rest of the word ex) Hat, return 'at'
var arraywithoutFirstLetter = word.slice(1);


var vowels = ['a','e','i', 'o', 'u'];

    //compare each vowel in the array and add  'ay' at the end
    if ((arrayLetters[0] === vowels[0]) || (arrayLetters[0] === vowels[1]) || (arrayLetters[0] === vowels[2]) || (arrayLetters[0] === vowels[3]) || (arrayLetters[0] === vowels[4]))  {
      pig_latin = word + "ay";
      //therefore the rest of the letters are consonants
      //create two arrays and add together
    } else {
        pig_latin = arraywithoutFirstLetter + arrayfirstLetter + "ay";

    }

return pig_latin;

};
