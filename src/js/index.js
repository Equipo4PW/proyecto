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

//Buscar todo tipo de comida en la barra de búsqueda
const searchInput = document.getElementById('buscador');
const searchButton = document.getElementById('botonbuscador');
const results = document.getElementById('resultados');

searchButton.addEventListener('click', searchMeals);

function searchMeals() {
  const search = searchInput.value;

  if (search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);

    getMealResults(url)
      .then(function (meals) {
        displayMealResults(meals);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function formatSearchString(search) {
  return search.replace(/ /g, '+');
}

function buildUrl(search) {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';

  return `${baseUrl}?s=${search}`;
}

function getMealResults(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.meals;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayMealResults(meals) {
  results.innerHTML = '';

  if (meals) {
    meals.forEach(function (meal) {
      const img = document.createElement('img');
      img.src = meal.strMealThumb;
      img.alt = meal.strMeal;
      results.appendChild(img);
    });
  } else {
    results.textContent = 'No se encontraron resultados.';
  }
}
