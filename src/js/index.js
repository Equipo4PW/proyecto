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