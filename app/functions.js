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
    return returnFunc;
  },

  makeClosures : function(arr, fn) {
    var newArr = [];
    var newFunc;
    arr.forEach(function(el) {
      newFunc = fn.bind('',el);
      newArr.push(newFunc);
    })
    return newArr;
  },

  partial : function(fn, str1, str2) {
    var origFuncLength = fn.length;
    var args = [str1,str2];
    return function() {
      var argArray = Array.prototype.slice.call(arguments);
      argArray.forEach(function(el) {
        args.push(el);
      });
      if(args.length===origFuncLength) {
        return fn.apply('',args);
      }
    }
  },

  useArguments : function() {
    var argArray = Array.prototype.slice.call(arguments);
    return argArray.reduce(function(a,b) {
      return a+b;
    })
  },

  callIt : function(fn) {
    var argArray = Array.prototype.slice.call(arguments);
    var func = argArray.splice(0,1)[0];
    return func.apply('',argArray);
  },

  partialUsingArguments : function(fn) {
    var argArray = Array.prototype.slice.call(arguments);
    var func = argArray.splice(0,1)[0];
    var origFuncLength = func.length;
    return function() {
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
    var returnFunc = function(el) {
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
