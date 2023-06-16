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
  <h1>${meal.strMeal}</h1>

  <img src='${meal.strMealThumb}' alt="">

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
  
  `
;

  meal_container.innerHTML = agregandoComida;
}

//Buscar todo tipo de comida en la barra de búsqueda
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('button');
const results = document.getElementById('results');

searchButton.addEventListener('click', searchMeals);

function searchMeals() {
  const search = searchInput.value;

  if(search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);

    return getMealResults(url)
      .then(function(meals) {
        console.log(meals)
        gifs.forEach(function(image) {
          const img = document.createElement('img');
          img.src = image.images.fixed_height.url;
          img.alt = image.title;

          results.appendChild(img)
        })
      })
  }
}

function formatSearchString(search) {
  return search.replace(/ /g, '+');
}

function buildUrl (search) {
  const API_KEY = '1'; // llave de GIPHY
  const baseUrl = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

  return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}

function getMealResults(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data
    })
    .catch(function(err) {
      console.log(err)
    })
}