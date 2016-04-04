exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return new Promise(
  		function(resolve,reject) {
  			resolve(value);
  		})
  	.catch(function(error) {
  		throw error;
  	})
  },

  manipulateRemoteData : function(url) {
  	return $.ajax(url)
  	.then(function(data) {
  		var arr = [];
  		data.people.forEach(function(el) {
  			arr.push(el.name);
  		})
  		return arr.sort();
  	},function(error) {
  		throw error;
  	})
  }
};
