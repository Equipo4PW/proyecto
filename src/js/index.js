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

  `<img src='${meal.strMealThumb}' alt="">`
    
;

  meal_container.innerHTML = agregandoComida;
}

//Buscar todo tipo de comida en la barra de búsqueda
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('get_meal_btn');
const results = document.getElementById('results');

searchButton.addEventListener('click', searchMeals);

function searchMeals() {
  const search = searchInput.value;

  if(search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);

    return getGiphyResults(url)
      .then(function(gifs) {
        console.log(gifs)
        gifs.forEach(function(gif) {
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          img.alt = gif.title;

          results.appendChild(img)
        })
      })
  }
}

function formatSearchString(search) {
  return search.replace(/ /g, '+');
}

function buildUrl (search) {
  const API_KEY = 'PMBUpuaj3teq6I6sx3mV6DNlO6znGVfC'; // llave de GIPHY
  const baseUrl = 'https://api.giphy.com/v1/gifs/search';

  return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}

function getGiphyResults(url) {
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