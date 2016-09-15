
function retrieveDisplayRecipes() {
	var searchText = document.getElementById('searchBox').value;
}

function loadTopRatedRecipes() {
	$.ajax({
		url: 'http://food2fork.com/api/search?key=bf04268391ac462acdd61749bc647c6b',
		dataType: 'json',
		headers: {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': 'bf04268391ac462acdd61749bc647c6b'},
		type: "GET",
		success: function(data){
			showRecipes(data);
		}
	})
}

function showRecipes(data){
	var recipesObj = JSON.parse(data);
	var tableContent = "";
	for(var i=0; i<recipesObj.length; i++){
		var currentRecipe = recipesObj[i];
		
		tableContent += '<tr>' + 
		'<td><img src = "' + currentRecipe.image_url + '"></td>' +
		'<td>' + currentRecipe.title + '"></td>' +
		'<td>' + currentRecipe.source_url + '"></td>' + 
		'</tr>' + '\n';
	}
	document.getElementById('recipeResults').innerHTML = tableContent;
}
