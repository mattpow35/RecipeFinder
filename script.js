
document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;

  const url1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  fetch(url1)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      
      let results = "";

      try {

        for (let i = 0; i < json.meals.length; i++) {
          let image = json.meals[i].strMealThumb;

          if (json.meals[i].strSource !== "" && json.meals[i].strYoutube !== "") {
            results += "<div class=recipe-item><h3>" + json.meals[i].strMeal + "</h3>";
            if (json.meals[i].strSource !== "") {
              results += '<a href="' + json.meals[i].strSource + '">Recipe</a>';
            }
            if (json.meals[i].strYoutube !== "") {
              results += '<a href="' + json.meals[i].strYoutube + '">Youtube Video</a>';
            }
            results += '<img class="recipe-image" src="' + image + '" width=50%>';
            results += "</div>";
          }
          else {
            throw "error"
          }



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
