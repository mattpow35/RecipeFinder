
document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);
  const url1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json)
      let results = "";

      try {

        for (let i = 0; i < json.meals.length; i++) {
          let image = json.meals[i].strMealThumb;

          results += "<div class=recipe-item><h3>" + json.meals[i].strMeal + "</h3>";
          results += '<a href="' + json.meals[i].strSource + '">Recipe</a>';
          results += '<a href="' + json.meals[i].strYoutube + '">Youtube Video</a>';
          results += '<img class="recipe-image" src="' + image + '" width=50%>';
          results += '<p>' + json.meals[i].strInstructions + '</p>';
          results += "</div>";

        }

        document.getElementById("recipeResults").innerHTML = results;
      } catch (err) {
        document.getElementById("recipeResults").innerHTML = "No Recipe Found";
      }


    }).catch(function() {
      document.getElementById("recipeResults").innerHTML = "No Recipe Found";
      document.getElementById("recipeContainer").src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    });



});
