import { useParams, Link } from "react-router-dom";

const MealDetailsPage = () => {
  const { id } = useParams();

  //
  return (
    <div className="container mx-auto p-4">
      MealDetailsPage für: {id}
      <br />
      <button className="btn btn-primary">
        <Link to="/meals">Zurück</Link>
      </button>
    </div>
  );
};
export default MealDetailsPage;
