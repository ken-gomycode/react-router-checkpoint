import {Movie} from "../types.ts";

type MovieCardProps = {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer border rounded overflow-hidden shadow hover:shadow-lg transition">
      <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;