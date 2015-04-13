var scrabble = function(word) {

var pig_latin = "";

var arrayLetters = word.split('');
var arrayfirstLetter = word.slice(0,1);
var arraywithoutFirstLetter = word.slice(1);


var vowels = ['a','e','i', 'o', 'u'];

    if ((arrayLetters[0] === vowels[0]) || (arrayLetters[0] === vowels[1]) || (arrayLetters[0] === vowels[2]) || (arrayLetters[0] === vowels[3]) || (arrayLetters[0] === vowels[4]))  {
      pig_latin = word + "ay";
    } else {
        pig_latin = arraywithoutFirstLetter + arrayfirstLetter + "ay";
      // pig_latin = word + "ay";
    }

return pig_latin;

};
