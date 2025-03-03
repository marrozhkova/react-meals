// import CardItemComponent from "../components/CardItemComponent";
// import { fetchData } from "../utilities/apiFetch";
// import { useEffect, useState } from "react";

// const MealsPage = () => {
//   const [meals, setMeals] = useState([]);
//   // useEffect(() => {
//   //   fetchData("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
//   //     .then((data) => setMeals(data.meals))
//   //     .catch((error) => console.error(error));
//   // }, []);
//   useEffect(() => {
//     async function fetchMeals() {
//       try {
//         const data = await fetchData(
//           "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
//         );
//         setMeals(data.meals);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchMeals();
//   }, []);

//   console.table(meals);

//   // const meals1 = [];
//   return (
//     <div className="container  mx-auto p-4 flex flex-row flex-wrap justify-center items-center gap-4">
//       {meals.length > 0 ? (
//         meals.map((meal) => (
//           <CardItemComponent
//             src={meal.strMealThumb}
//             name={meal.strMeal}
//             key={meal.idMeal}
//           />
//         ))
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };
// export default MealsPage;
import { useState, useEffect } from "react";

import CardItemComponent from "../components/CardItemComponent";
import { fetchData } from "../utilities/apiFetch.js";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealsUrl);

        console.log("From API", data.meals);

        setMeals(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchMeals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {meals.length > 0 ? (
        meals.map((food) => (
          <>
            <CardItemComponent key={food.idMeal} food={food} />
          </>
        ))
      ) : (
        <p>Kein Essen is da </p>
      )}
    </div>
  );
};
export default MealsPage;
