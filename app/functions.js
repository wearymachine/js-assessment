exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply('',arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var numCalls = 0;
    var output = str+', ';
    var returnFunc = function(arg) {
      return output+arg;
    }
    return returnFunc; //return the function, which returns the entire string, which exists in the scope since returnFunc is in the scope of functionFunction
  },

  makeClosures : function(arr, fn) {
    var newArr = [];
    var newFunc;
    arr.forEach(function(el) {
      newFunc = fn.bind('',el); //bind the array element as the input to the square function
      newArr.push(newFunc);
    })
    return newArr;
  },

  partial : function(fn, str1, str2) {
    var origFuncLength = fn.length;
    var args = [str1,str2]; //initialize the arguments with the two inputs here, since they're provided already
    return function() {
      var argArray = Array.prototype.slice.call(arguments);
      argArray.forEach(function(el) {
        args.push(el);
      });
      if(args.length===origFuncLength) { //run the function once we hit the required number of arugments
        return fn.apply('',args);
      }
    }
  },

  useArguments : function() {
    var argArray = Array.prototype.slice.call(arguments); //turn the arguments into an array
    return argArray.reduce(function(a,b) {
      return a+b;
    })
  },

  callIt : function(fn) {
    var argArray = Array.prototype.slice.call(arguments);
    var func = argArray.splice(0,1)[0]; //yes, it is input as 'fn' here, but this is safer since we don't know how many arguments will be provided
    return func.apply('',argArray);
  },

  partialUsingArguments : function(fn) {
    var argArray = Array.prototype.slice.call(arguments);
    var func = argArray.splice(0,1)[0];
    var origFuncLength = func.length;
    return function() { //similar concept where we keep taking inputs and run it once we have the required number of inputs
      var newArgArray = Array.prototype.slice.call(arguments);
      newArgArray.forEach(function(el) {
        if(argArray.length < origFuncLength) {
          argArray.push(el);
        }
      })
      if(argArray.length===origFuncLength) {
        return fn.apply('',argArray);
      }
    }
  },

  curryIt : function(fn) {
    var origFuncLength = fn.length;
    var args = [];
    var returnFunc = function(el) { //return this function itself until we get required number of inputs, then we invoke it
      args.push(el);
      if(args.length===origFuncLength) {
        return fn.apply('',args);
      }
      else {
        return returnFunc;
      }
    }
    return returnFunc;

  }
};
