exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var val;
    var exp;
    while(num>0) {
      val = 1;
      exp = 0;
      while(val<=num) {
        val = val*2;
        exp++;
      }
      val = val/2;
      num-=val;
      if(exp===bit) {
        return 1;
      }
      else if(exp < bit) {
        return 0;
      }
      else if(num===0 && bit<exp) {
        return 0;
      }
    }
  },

  base10: function(str) {
  	var output = 0;
  	var cnt = 0;
  	var exp;
  	var len = str.length;
  	while(cnt < len) {
  		if(str[cnt] === '1') {
  			exp = len-1-cnt;
  			output += Math.pow(2,exp);
  		}
  		cnt++;
  	}
  	return output;
  },

  convertToBinary: function(num) {
  	var output = ['0','0','0','0','0','0','0','0'];
  	var length = 8;
  	var exp;
  	var val;
  	while(num > 0) {
  		val = 1;
  		exp = 0;
  		while(val <= num) {
  			val = val*2;
  			exp++;
  		}
  		exp--;
  		val = val/2;
  		output[length-1-exp] = '1';
  		num -= val;
  	}
  	return output.join('');
  },

  multiply: function(a, b) {
    var prod = a*b;
    if(Math.round(prod)===prod) {
      return prod;
    }
    else {
      var lengthToTake = a.toString().length+b.toString().length;
      var prodArr = prod.toString().substring(0,lengthToTake).split('');
      var idx = prodArr.length-1;
      while(prodArr[idx]==='0') {
        prodArr.pop();
        idx--;
      }
      return Number(prodArr.join(''));
    }
  }
};
