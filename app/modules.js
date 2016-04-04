exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  	var obj = {};
  	obj.greeting = str1;
  	obj.name = str2;
  	obj.sayIt = function() { //method on the return object's prototype
  		return this.greeting + ', ' + this.name;
  	}
  	return obj;
  }

};
