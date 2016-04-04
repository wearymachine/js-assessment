exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var results = []; //array of results which the recursive function has access to
    function recursiveLister(currentFolder,dirArray) {
      dirArray.push(currentFolder.dir); //push in the directory name of the folder we're inside.. need to have access to past directories too, hence the array
      var files = currentFolder.files; //the files array to loop through
      files.forEach(function(el,idx,arr) {
        if(typeof el==='string' && (!dirName||dirArray.indexOf(dirName)!==-1)) { //if it's a string (an actual file) AND either no directory specified, or we're in the correct directory, push into results array
          results.push(el);
        }
        else if(typeof el==='object') { //if we're about to enter a subfolder, recursively call this function
          recursiveLister(el,dirArray);
        }
        if(idx===arr.length-1) { //if we're in the final file and about to exit, make sure we get rid of the directory from the directory array
          dirArray.pop();
        }
      })
      return results;
    }
    return recursiveLister(data,[]); //return the function call to the recursive function, initilizing the directory array as empty to start
  },

  permute: function(arr) {
  	var results = [];
    var str = arr.join(''); //easier to work with the array of numbers joined together, and then split up later
    function recursivePermute(s1,s2) { //similar approach as the 'recursiveLister' function above.. in this case 's1' is the accumulated number so far, 's2' is what is left
      var output;
      var removed;
      var s2Arr;
      var news1;
      var news2;
      if(s2.length===1) { //if there's only one more digit to add (length of s2 is just 1), simply add it, and then process it (i.e. split back into array, turn everything into a number from a string, and then push into results array)
        output = s1+s2;
        output = output.split('').map(function(el) {
          return Number(el);
        });
        results.push(output);
      }
      else { //loop through each character in s2, remove the character from s2 (which becomes 'news2'), add the character to s1 (which becomes 'news1'), then recursively call the function with 'news1' and 'news2'.. need to make sure 's1' and 's2' stay in their original forms at the end of each iteration of the loop
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

  fibonacci: function(n) { //couldn't recursively call the parent function 'fibonacci' and get it working, hence the 'recursiveFib' function below.. normally I would not take this approach with this type of problem (i.e. no results array to push into)
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
    function recursiveBuilder(acc) { //similar approach again as the file listing and array permutation examples.. 'acc' is the accumulated string
      var openCnt;
      var cnt;
      var arr;
      if(acc.length===2*n) { //push in once the length of the string is double the input (i.e. if n is 3, all resulting strings will have length of 6)
        results.push(acc);
      }
      else if(acc.length===0){ //if the input string is empty, start off by adding an opening parenthesis '('
        recursiveBuilder('(');
      }
      else {
        openCnt = 0; //number of open parenthesis that STILL NEED to be closed
        cnt = 0; //number of open parenthesis regardless or not of if they have their respective closing parenthesis
        arr = acc.split('');
        arr.forEach(function(el) {
          if(el==='(') { //increment BOTH 'cnt' and 'openCnt'
            cnt++;
            openCnt++;
          }
          else if(el===')') { //if you find a closing parenthesis, decrement the 'openCnt' since one opening parenthesis has found its pairing closer
            openCnt--;
          }
        })
        if(cnt<n) { //if we still haven't hit the input number for opening parenthesis, add another opener '(', and run an instance of the recursive call
          recursiveBuilder(acc+'(');
        }
        if(openCnt>0) { //if we still have open parenthesis that need to be closed, add a closer ')' and run an instance of the recursive call
          recursiveBuilder(acc+')');
        }
      }
      return results;
    }
    return recursiveBuilder('');
  }
};
