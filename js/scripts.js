var scrabble = function(word) {

var pig_latin = "";

var arrayLetters = word.split();

var vowels = ['a','e','i', 'o', 'u'];

    if ((word[0] === arrayLetters[0]) || (word[0] === arrayLetters[1]) || (word[0] === arrayLetters[2]) || (word[0] === arrayLetters[3]) || (word[0] === arrayLetters[4]))  {
      pig_latin = word + "ay";
    }

return pig_latin;

};
