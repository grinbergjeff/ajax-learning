$(document).ready(function(){

	$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    myData = data.Search;
	showResults();
  })
});
function showResults() {
	$.each(myData, function(index, value) {
			console.log(value.Title);
		})
}