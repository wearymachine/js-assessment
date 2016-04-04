exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return new Promise(
  		function(resolve,reject) {
  			resolve(value); //tests have output expecting to be input
  		})
  	.catch(function(error) { //error handling
  		throw error;
  	})
  },

  manipulateRemoteData : function(url) {
  	return $.ajax(url)
  	.then(function(data) {
  		var arr = [];
  		data.people.forEach(function(el) {
  			arr.push(el.name); //data.people is an array from the AJAX call.. get the names
  		})
  		return arr.sort();
  	},function(error) {
  		throw error;
  	})
  }
};
