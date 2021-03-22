import { MovieCard } from '../components/MovieCard';
import Header from '../components/Header';

import '../styles/content.scss';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  movies: MovieProps[],
  selectedGenre: GenreResponseProps;
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div className="container">
        <Header selectedGenreTitle={props.selectedGenre.title} />

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}

export default Content;