import {useNavigate} from "react-router";
import MovieCard from "../components/MovieCard.tsx";
import movies from "../movies.json";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.slug} movie={movie} onClick={() => navigate(`/movie/${movie.slug}`)} />
      ))}
    </div>
  );
}

export default Home;