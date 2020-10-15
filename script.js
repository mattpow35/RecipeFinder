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
      results += '<div class="row no-gutters">';
      try {

        for (let i = 0; i < json.meals.length; i++) {
          let image = json.meals[i].strMealThumb;
          results += '<div class="col-lg-3">';
          results += "<div class=recipe-item><p>" + json.meals[i].strMeal + "</p>";
          results += '<img class="recipe-image" src="' + image + '" width=50%>';
          results += "</div></div>";

        }
        results += '</div>';
        document.getElementById("recipeResults").innerHTML = results;
      } catch (err) {
        document.getElementById("recipeResults").innerHTML = "No Recipe Found";
      }


    }).catch(function() {
      document.getElementById("recipeResults").innerHTML = "No Recipe Found";
      document.getElementById("recipeContainer").src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    });



});
