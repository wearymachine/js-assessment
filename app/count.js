exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var x=start;
  	console.log(x); //initial console.log to pass the test spec
  	function counter() { //what runs in the setInterval
  		if(x<end) {
  			x++;
  			console.log(x);
  		}
  	}
  	var runFunc = setInterval(counter,100); //setInterval function itself with the "counter" function
  	var obj = {};
  	obj.cancel = function() { //how to stop the counter function
  		clearInterval(runFunc);
  	}
  	return obj;
  }
};
