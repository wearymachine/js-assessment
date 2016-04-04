exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var arr = str.split('');
  	var idx = 0;
  	var val;
  	var cnt;
  	while(arr[idx]) {
  		val = arr[idx];
  		cnt = 1; //initialize count to 1, since we have 1 instance of current reference value
  		idx++;
  		while(arr[idx]===val) { //while each character is a repeat of current reference value, splice it if we've exceeded input amount
  			cnt++;
  			if(cnt>amount) {
  				arr.splice(idx,1)
  			}
  			else {
  				idx++;
  			}
  		}
  	}
  	return arr.join('');
  },
  wordWrap: function(str, cols) {
  	var arr = str.split('');
  	var idx = 0;
  	var backTrackFound;
  	var refIdx;
  	if(str.length <= cols) { //if the string can be fit in one line, basically
  		return str;
  	}
  	else {
      idx+=cols; //jump an entire line (line length based on 'cols' input.. also done at the end of each iteration of the while loop)
  		while(arr[idx]) { //while still in the string
        if(arr[idx]===' ') { //if we're so lucky that the end of the line is a space, break new line there
          arr[idx] = '\n';
          idx++;
        }
        else { //not so lucky
          refIdx = idx;
          backTrackFound = false;
          for(var i=1; i<=cols; i++) { //go backwards first till you hit the first space.. until you go back an entire line
            idx--;
            if(arr[idx]===' ') {
              arr[idx] = '\n';
              idx++;
              backTrackFound = true;
              break;
            }
          }
          if(!backTrackFound) { //if backtracking didn't find a space, then go forwards instead
            idx = refIdx;
            for(var j=1; j<=cols; j++) {
              idx++;
              if(arr[idx]===' ') {
                arr[idx] = '\n';
                idx++;
                break;
              }
            }
          }
        }
        idx+=cols;
      }
      return arr.join('');
  	}
  },
  reverseString: function(str) {
  	return str.split('').reverse().join(''); //split into array, which can be reversed (unlike strings), then join back into string
  }
};
