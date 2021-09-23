import { movies } from './data';
import { Container } from './styles';

import MovieCard from '$/components/MovieCard';

export default function HomeView(): JSX.Element {
  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard
          director={movie.director}
          directorImage={movie.directorImage}
          key={movie.id}
          image={movie.image}
          name={movie.name}
          tags={movie.tags}
        />
      ))}
    </Container>
  );
}
