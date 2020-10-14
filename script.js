document.getElementById("recipeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("recipeInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json)
      let results = "";
      try {
        let image = json.meals[0].strMealThumb;
        results += json.meals[0].strMeal;

        document.getElementById("recipeResults").innerHTML = results;
        document.getElementById("recipeImage").src = image
      }
      catch(err) {
        document.getElementById("recipeResults").innerHTML = "No Recipe Found";
      }


    }).catch(function(){
      document.getElementById("recipeResults").innerHTML = "No Recipe Found";
    }) ;



});
