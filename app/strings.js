exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var arr = str.split('');
  	var idx = 0;
  	var val;
  	var cnt;
  	while(arr[idx]) {
  		val = arr[idx];
  		cnt = 1;
  		idx++;
  		while(arr[idx]===val) {
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
  	if(str.length <= cols) {
  		return str;
  	}
  	else {
      idx+=cols;
  		while(arr[idx]) {
        if(arr[idx]===' ') {
          arr[idx] = '\n';
          idx++;
        }
        else {
          refIdx = idx;
          backTrackFound = false;
          for(var i=1; i<=cols; i++) {
            idx--;
            if(arr[idx]===' ') {
              arr[idx] = '\n';
              idx++;
              backTrackFound = true;
              break;
            }
          }
          if(!backTrackFound) {
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
  	return str.split('').reverse().join('');
  }
};
