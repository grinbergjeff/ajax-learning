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
		part: 'snippet',
		key: 'AIzaSyB2BX7jkZk-XfRlNMZHVsNCWlEdaASsPBY',
		q: term
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function(data){
      showResults(data.Search);
})
};
function showResults(results) {
	var html = '';
	$.each(results, function(index, value) {
			html += "<img src='item.snippet.thumbnails.medium.url'>";
			console.log(item.snippet.thumbnails.medium.url);
		})
	$('#search-results').html(html);
};