exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var x=start;
  	console.log(x);
  	function counter() {
  		if(x<end) {
  			x++;
  			console.log(x);
  		}
  	}
  	var runFunc = setInterval(counter,100);
  	var obj = {};
  	obj.cancel = function() {
  		clearInterval(runFunc);
  	}
  	return obj;
  }
};
