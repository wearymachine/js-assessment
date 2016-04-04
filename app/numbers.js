exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var val;
    var exp;
    while(num>0) { //keep generating bits and subtracting off the exponent values until we hit 0.. note that the bits we convert decrease since we keep subtracting the value
      val = 1;
      exp = 0;
      while(val<=num) {
        val = val*2;
        exp++;
      }
      val = val/2; //since we overshot due to (val<=num) condition.. normally I would do exp--, but in this case, the exp runs from 0-7 scale, and the bit input is 1-8, so that corrects itself
      num-=val;
      if(exp===bit) { //if we're on the bit
        return 1;
      }
      else if(exp < bit) { //if we passed the bit
        return 0;
      }
      else if(num===0 && bit<exp) { //if we've finished converting the number, but haven't hit the bit yet
        return 0;
      }
    }
  },

  base10: function(str) {
  	var output = 0;
  	var cnt = 0;
  	var exp;
  	var len = str.length;
  	while(cnt < len) { //loop through the string, bit by bit
  		if(str[cnt] === '1') {
  			exp = len-1-cnt; //the index we're on is inversely proportional to the exponent to take.. for instance, the last bit on the string, despite being of high index, is really the 0th exponent
  			output += Math.pow(2,exp);
  		}
  		cnt++;
  	}
  	return output;
  },

  convertToBinary: function(num) {
  	var output = ['0','0','0','0','0','0','0','0']; //since we're given that it's 8-bit
  	var length = 8;
  	var exp;
  	var val;
  	while(num > 0) { //similar approach as 'valueAtBit' function
  		val = 1;
  		exp = 0;
  		while(val <= num) {
  			val = val*2;
  			exp++;
  		}
  		exp--; //correct exponent here
  		val = val/2;
  		output[length-1-exp] = '1';
  		num -= val;
  	}
  	return output.join('');
  },

  multiply: function(a, b) {
    var prod = a*b;
    if(Math.round(prod)===prod) { //quick integer check for the product
      return prod;
    }
    else { //if we have a decimal
      var lengthToTake = a.toString().length+b.toString().length; //the MAX length to take is the sum of the lengths of the two individual values we're multiplying
      var prodArr = prod.toString().substring(0,lengthToTake).split('');
      var idx = prodArr.length-1;
      while(prodArr[idx]==='0') { //strip any extra zeroes at the end
        prodArr.pop();
        idx--;
      }
      return Number(prodArr.join(''));
    }
  }
};
