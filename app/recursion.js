exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var results = [];
    function recursiveLister(currentFolder,dirArray) {
      dirArray.push(currentFolder.dir);
      var files = currentFolder.files;
      files.forEach(function(el,idx,arr) {
        if(typeof el==='string' && (!dirName||dirArray.indexOf(dirName)!==-1)) {
          results.push(el);
        }
        else if(typeof el==='object') {
          recursiveLister(el,dirArray);
        }
        if(idx===arr.length-1) {
          dirArray.pop();
        }
      })
      return results;
    }
    return recursiveLister(data,[]);
  },

  permute: function(arr) {
  	var results = [];
    var str = arr.join('');
    function recursivePermute(s1,s2) {
      var output;
      var removed;
      var s2Arr;
      var news1;
      var news2;
      if(s2.length===1) {
        output = s1+s2;
        output = output.split('').map(function(el) {
          return Number(el);
        });
        results.push(output);
      }
      else {
        s2Arr = s2.split('');
        copy = s2Arr;
        for(var x=0; x<s2Arr.length; x++) {
          removed = s2Arr.splice(x,1)[0];
          news1 = s1+removed;
          news2 = s2Arr.join('');
          recursivePermute(news1,news2);
          s2Arr.splice(x,0,removed);
        }
      }
      return results;
    }
    return recursivePermute('',str);
  },

  fibonacci: function(n) {
  	function recursiveFib(val) {
  		if(val===1 || val===2) {
  			return 1;
  		}
  		else {
  			return recursiveFib(val-1) + recursiveFib(val-2);
  		}
  	}
  	return recursiveFib(n);
  },

  validParentheses: function(n) {
    var results = [];
    function recursiveBuilder(acc) {
      var openCnt;
      var cnt;
      var arr;
      if(acc.length===2*n) {
        results.push(acc);
      }
      else if(acc.length===0){
        recursiveBuilder('(');
      }
      else {
        openCnt = 0;
        cnt = 0;
        arr = acc.split('');
        arr.forEach(function(el) {
          if(el==='(') {
            cnt++;
            openCnt++;
          }
          else if(el===')') {
            openCnt--;
          }
        })
        if(cnt<n) {
          recursiveBuilder(acc+'(');
        }
        if(openCnt>0) {
          recursiveBuilder(acc+')');
        }
      }
      return results;
    }
    return recursiveBuilder('');
  }
};
