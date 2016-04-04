exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
    //could've done without array method, but this is faster
  },

  sum : function(arr) {
    return arr.reduce(function(a,b) {
      return a+b;
    })
  },

  remove : function(arr, item) {
    return arr.filter(function(el) {
      return el !== item;
    })
  },

  removeWithoutCopy : function(arr, item) {
    var x = 0;
    while(x<arr.length) { //loop through and splice (remove) if it's the item
      if(arr[x]===item) {
        arr.splice(x,1);
      }
      else {
        x++;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,-1,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,-1,item);
    return arr;
  },

  count : function(arr, item) {
    var cnt=0;
    arr.forEach(function(el) {
      if(el===item) {
        cnt++;
      }
    })
    return cnt;
  },

  duplicates : function(arr) {
    arr.sort(); //sort first so that duplicates appear consecutively
    var results = [];
    arr.forEach(function(el,ind,array) {
      if(array[ind+1]===el && results.indexOf(el)===-1) { //if item appears consecutively, but hasn't already been pushed into results
        results.push(el);
      }
    })
    return results;
  },

  square : function(arr) {
    return arr.map(function(el) {
      return el*el;
    })
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    arr.forEach(function(el,ind,array) {
      if(el===target) {
        results.push(ind);
      }
    })
    return results;
  }
};
