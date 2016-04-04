exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var pattern = /[0-9]+/;
    return pattern.test(str);
  },

  containsRepeatingLetter : function(str) {
    var pattern = /([a-zA-Z])\1/;
    return pattern.test(str);
  },

  endsWithVowel : function(str) {
    var pattern = /([aeiouAEIOU])$/;
    return pattern.test(str);
  },

  captureThreeNumbers : function(str) {
    var pattern = /[0-9]{3}/;
    var result = str.match(pattern);
    if(!result) {
      return false;
    }
    else {
      return result[0];
    }
  },

  matchesPattern : function(str) {
    var pattern = /^[0-9]{3}(?=-(?=[0-9]{3}(?=-(?=[0-9]{4}(?=$)))))/;
    return pattern.test(str);
  },

  isUSD : function(str) {
    var beginPattern = /^\$(?=[0-9])/;
    var rejectionOne = /,(?=[0-9]{1,2}(?=,|\.))/;
    var rejectionTwo = /,(?=[0-9]{4})/;
    var decimalEnding = /\.(?=[0-9]{2}(?=$))/;
    var containsDecimal = /\./;
    var weirdSymbolsExp = /\D/g;
    var weirdSymbolsTest = function() {
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
    if(beginPattern.test(str)&&!rejectionOne.test(str)&&!rejectionTwo.test(str)&&(decimalEnding.test(str) || !containsDecimal.test(str))&&noWeirdSymbols) {
      return true;
    }
    else {
      return false;
    }
  }
};
