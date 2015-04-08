
var word = function(input) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i <= vowels.length; i++) {
    if(input === vowels[i])  {
      return true;
    }
  }


};

// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
