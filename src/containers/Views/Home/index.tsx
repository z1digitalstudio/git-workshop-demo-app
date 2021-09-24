import { movies as rawMovies } from './data';
import { useSort } from './logic';
import { Container, Header, Label, MovieList } from './styles';

import MovieCard from '$/components/MovieCard';

export default function HomeView(): JSX.Element {
  const { movies, onChangeSorting, options } = useSort(rawMovies);

  return (
    <Container>
      <Header>
        <Label htmlFor="sort">Sort by: </Label>
        <select id="sort" name="sort" onChange={onChangeSorting}>
          {options.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </Header>
      <MovieList>
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
      </MovieList>
    </Container>
  );
}
