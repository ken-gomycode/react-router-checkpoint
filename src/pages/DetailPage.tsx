import { useParams } from 'react-router-dom';
import movies from '../movies.json';

const DetailPage = () => {
  const { slug } = useParams();
  const movie = movies.find(m => m.slug === slug);

  if (!movie) return <div className="p-6 text-center">Movie not found</div>;

  const youtubeId = movie.trailer.split('v=')[1];

  return (
    <main className="p-6">
      <div className="w-[500px] mx">
        <img src={movie.poster} alt={movie.title} className="w-full rounded mb-6" />
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-600 mb-4">Release Date: {movie.release_date}</p>
        <p className="mb-4"><strong>Cast:</strong> {movie.cast.join(', ')}</p>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-80"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;