$(document).ready(function(){

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    });
  });
})
function getRequest(term) {
	var params = {
		s: term,
		r: 'json'
	};
	url = 'http://www.omdbapi.com/?s=';
	$.getJSON(url, params, function(data){
      showResults(data.Search);
})
};
function showResults(results) {
	var html = '';
	$.each(results, function(index, value) {
			html += '<p>' + value.Title + '</p>';
			console.log(value.Title);
		})
	$('#search-results').html(html);
};