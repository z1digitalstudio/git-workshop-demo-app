import { ChangeEvent, useCallback, useState } from 'react';

import type { movies as Movies } from './data';

type Movie = typeof Movies[number];

const options = [
  {
    name: 'Name (A-Z)',
    sort: (a: Movie, b: Movie) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
    value: 'name',
  },
  {
    name: 'Name (Z-A)',
    sort: (a: Movie, b: Movie) =>
      b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase()),
    value: 'name-desc',
  },
  {
    name: 'Director Name (A-Z)',
    sort: (a: Movie, b: Movie) =>
      a.director
        .toLocaleLowerCase()
        .localeCompare(b.director.toLocaleLowerCase()),
    value: 'director-name',
  },
  {
    name: 'Director Name (Z-A)',
    sort: (a: Movie, b: Movie) =>
      b.director
        .toLocaleLowerCase()
        .localeCompare(a.director.toLocaleLowerCase()),
    value: 'director-name-desc',
  },
] as const;

export function useSort(movies: Movie[]) {
  const [sortedMovies, setSortedMovies] = useState(
    movies.sort(options[0].sort),
  );

  const onChangeSorting = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const option = options.find((it) => it.value === e.target.value);

      if (!option) {
        return;
      }

      setSortedMovies((prevMovies) => [...prevMovies].sort(option.sort));
    },
    [setSortedMovies],
  );

  return {
    movies: sortedMovies,
    onChangeSorting,
    options,
  };
}
