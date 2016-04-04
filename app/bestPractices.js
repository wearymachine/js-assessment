exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = { //need to make 'var' or else it's global
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
    var getValue; //declare the function up here, and the specific instances of what function it is, below
    if (flag) {
      getValue = function() {return 'a';}
    } else {
      getValue = function() {return 'b';}
    }

    return getValue();
  },

  parseInt : function(num) {
    var pattern = /[0-9]/; //REGEX to test for number
    for(var x=0; x<num.length; x++) { //loop through and get numbers.. exiting on first instance of a non-numeric character
      if(pattern.test(num[x])===false) {
        break;
      }
    }
    return parseInt(num.substring(0,x));    
  },

  identity : function(val1, val2) {
    return val1 === val2;
  }
};
