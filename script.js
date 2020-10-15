// let url3 = "https://www.themealdb.com/api/json/v1/1/categories.php"
// fetch(url3)
//   .then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     console.log(json)
//     let categories = "";
//     console.log(json);
//
//     for (let i = 0; i < json.categories.length; i++) {
//       categories += json.categories[i].strCategory + " ";
//     }
//
//     document.getElementById("possibleCategories").innerHTML = categories;
//
//   });


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
          if (json.meals.[i].strSource != " ") {
            results += '<a href="' + json.meals[i].strSource + '" target=_blank>Recipe</a>';
          }
          else {
            results += "<p>" + json.meals[i].strInstructions + "<p>" ;
          }

          if (json.meals.[i].strYoutube != " ") {
            results += '<a href="' + json.meals[i].strYoutube + '" target=_blank>Youtube Video</a>';
          }
          else {
            results += "<p>" + json.meals[i].strInstructions + "<p>" ;
          }

          results += '<img class="recipe-image" src="' + image + '" width=50%>';
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
