import CardItemComponent from "../components/CardItemComponent";
import { fetchData } from "../utilities/apiFetch";
import { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  // useEffect(() => {
  //   fetchData("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  //     .then((data) => setMeals(data.meals))
  //     .catch((error) => console.error(error));
  // }, []);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        );
        setMeals(data.meals);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMeals();
  }, []);

  console.table(meals);

  return (
    <div className="container  mx-auto p-4 flex flex-row flex-wrap justify-center items-center gap-4">
      {meals &&
        meals.map((meal) => (
          <CardItemComponent
            src={meal.strMealThumb}
            name={meal.strMeal}
            key={meal.idMeal}
          />
        ))}
    </div>
  );
};
export default MealsPage;
