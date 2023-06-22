import css from "../css/styles.css";
import "bootstrap";
import "../css/bootstrap.min.css";

const Aleatorio = document.getElementById("Random");
const meal_container = document.getElementById("meal"); //El meal crea la comida, es decir se utiliza para llamar a los elementos en el API

Aleatorio.addEventListener("click", () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0]);
    })
    .catch(e => {
      console.warn(e);
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }

  const agregandoComida = 

  `
  <center><h1>${meal.strMeal}</h1>

  <img src='${meal.strMealThumb}' alt=""></center>

  <br>
  <br>
  <h5>Ingredients:</h5>
  <h6>${meal.strIngredient1}</h6>
  <h6>${meal.strIngredient2}</h6>
  <h6>${meal.strIngredient3}</h6>
  <h6>${meal.strIngredient4}</h6>
  <h6>${meal.strIngredient5}</h6>
  <h6>${meal.strIngredient6}</h6>
  <h6>${meal.strIngredient7}</h6>
  <h6>${meal.strIngredient8}</h6>
  <h6>${meal.strIngredient9}</h6>
  <h6>${meal.strIngredient10}</h6>
  <h6>${meal.strIngredient11}</h6>
  <h6>${meal.strIngredient12}</h6>
  <h6>${meal.strIngredient13}</h6>
  <h6>${meal.strIngredient14}</h6>
  <h6>${meal.strIngredient15}</h6>
  <h6>${meal.strIngredient16}</h6>
  <h6>${meal.strIngredient17}</h6>
  <h6>${meal.strIngredient18}</h6>
  <h6>${meal.strIngredient19}</h6>
  <h6>${meal.strIngredient20}</h6>
  
  <br>
  <h5>Instructions:</h5>
  <p>${meal.strInstructions}</p>
  
  <center><div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
      <iframe width="420" height="315"
      src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
      </iframe>
    </div>
  </div></center>
  `
;

  meal_container.innerHTML = agregandoComida;
}

// Buscar todo tipo de comida en la barra de búsqueda
$(document).ready(function() {
  // Función para realizar la búsqueda
  function searchMeal() {
      var inputValue = $('#mealInput').val();
      var apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue;

      $.get(apiUrl, function(data) {
          // Limpiar el div de resultados
          $('#mealResults').empty();

          if (data.meals) {
              data.meals.forEach(function(meal) {
                  // Crear un elemento para mostrar la comida
                  var mealElement = $('<div class="meal">');
                  var mealName = $('<h1>').text(meal.strMeal);

                 
                  var mealThumbnail = $('<img>').attr('src', meal.strMealThumb);

                  var mealIngredient1 = $('<h6>').text(meal.strIngredient1);
                  var mealIngredient2 = $('<h6>').text(meal.strIngredient2);
                  var mealIngredient3 = $('<h6>').text(meal.strIngredient3);
                  var mealIngredient4 = $('<h6>').text(meal.strIngredient4);
                  var mealIngredient5 = $('<h6>').text(meal.strIngredient5);
                  var mealIngredient6 = $('<h6>').text(meal.strIngredient6);
                  var mealIngredient7 = $('<h6>').text(meal.strIngredient7);
                  var mealIngredient8 = $('<h6>').text(meal.strIngredient8);
                  var mealIngredient9 = $('<h6>').text(meal.strIngredient9);
                  var mealIngredient10 = $('<h6>').text(meal.strIngredient10);
                  var mealIngredient11 = $('<h6>').text(meal.strIngredient11);
                  var mealIngredient12 = $('<h6>').text(meal.strIngredient12);
                  var mealIngredient13 = $('<h6>').text(meal.strIngredient13);
                  var mealIngredient14 = $('<h6>').text(meal.strIngredient14);
                  var mealIngredient15 = $('<h6>').text(meal.strIngredient15);
                  var mealIngredient16 = $('<h6>').text(meal.strIngredient16);
                  var mealIngredient17 = $('<h6>').text(meal.strIngredient17);
                  var mealIngredient18 = $('<h6>').text(meal.strIngredient18);
                  var mealIngredient19 = $('<h6>').text(meal.strIngredient19);
                  var mealIngredient20 = $('<h6>').text(meal.strIngredient20);
                  
                  var mealInstructions = $('<p>').text('Instructions: ' + meal.strInstructions);
        
                  mealElement.append(mealName, mealThumbnail,
                    mealIngredient1,
                    mealIngredient2,
                    mealIngredient3,
                    mealIngredient4,
                    mealIngredient5,
                    mealIngredient6,
                    mealIngredient7,
                    mealIngredient8,
                    mealIngredient9,
                    mealIngredient10,
                    mealIngredient11,
                    mealIngredient12,
                    mealIngredient13,
                    mealIngredient14,
                    mealIngredient15,
                    mealIngredient16,
                    mealIngredient17,
                    mealIngredient18,
                    mealIngredient19,
                    mealIngredient20,
                     mealInstructions);
                  $('#mealResults').append(mealElement);
              });
          } else {
              // Mostrar mensaje si no se encontraron resultados
              $('#mealResults').text('No se encontraron resultados');
          }
      });
  }

  // Asignar la función de búsqueda al hacer clic en el botón
  $('#searchButton').click(function() {
      searchMeal();
  });

  // Asignar la función de búsqueda al presionar Enter en el campo de entrada
  $('#mealInput').keypress(function(event) {
      if (event.which === 13) {
          searchMeal();
      }
  });
});