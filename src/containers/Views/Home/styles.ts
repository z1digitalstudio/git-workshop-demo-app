import styled from 'styled-components';

import MainLayout from '$/containers/Layouts/Main';

export const Container = styled(MainLayout)``;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-right: 0.5rem;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
