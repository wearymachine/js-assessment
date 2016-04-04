exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var pattern = /[0-9]/;
    return pattern.test(str);
  },

  containsRepeatingLetter : function(str) {
    var pattern = /([a-zA-Z])\1/; //more than one of a letter
    return pattern.test(str);
  },

  endsWithVowel : function(str) {
    var pattern = /([aeiouAEIOU])$/; 
    return pattern.test(str);
  },

  captureThreeNumbers : function(str) {
    var pattern = /[0-9]{3}/;
    var result = str.match(pattern);
    if(!result) { //normally would be null
      return false;
    }
    else { //since it's an array, return the first element
      return result[0];
    }
  },

  matchesPattern : function(str) {
    var pattern = /^[0-9]{3}(?=-(?=[0-9]{3}(?=-(?=[0-9]{4}(?=$)))))/; //3 numbers, followed by -, followed by 3 numbers, follwed by -, followed by 4 numbers, and then end
    return pattern.test(str);
  },

  isUSD : function(str) {
    var beginPattern = /^\$(?=[0-9])/; //starts with $ sign and number
    var rejectionOne = /,(?=[0-9]{1,2}(?=,|\.))/; //reject if a comma is followed by less than 3 digits before getting to a . or ,
    var rejectionTwo = /,(?=[0-9]{4})/; //reject if a comma is followed by 4 or more numbers
    var decimalEnding = /\.(?=[0-9]{2}(?=$))/; //if it has a decimal, make sure there's only two digits (for cents) after the decimal
    var containsDecimal = /\./; //if there's decimal
    var weirdSymbolsExp = /\D/g; //would return all non-numeric values
    var weirdSymbolsTest = function() { //make sure all non-numeric values are either '$', ',', or '.'
      var piece;
      var resultArr = str.match(weirdSymbolsExp);
      for(var i=0; i<resultArr.length; i++) {
        piece = resultArr[i];
        if(piece!=='$' && piece!==',' && piece!=='.') {
          return false;
        }
      }
      return true;
    }
    var noWeirdSymbols = weirdSymbolsTest();
    if(beginPattern.test(str)&&!rejectionOne.test(str)&&!rejectionTwo.test(str)&&(decimalEnding.test(str) || !containsDecimal.test(str))&&noWeirdSymbols) { //if ALL the checks pass
      return true;
    }
    else {
      return false;
    }
  }
};
