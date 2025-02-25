import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavLayoutComponent from "./components/NavLayoutComponent";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MealsPage from "./pages/MealsPage";
import MealDetailsPage from "./pages/MealDetailsPage";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayoutComponent />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="meals" element={<MealsPage />} />
            <Route path="meals/:id" element={<MealDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
