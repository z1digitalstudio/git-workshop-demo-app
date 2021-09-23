import styled from 'styled-components';

import MainLayout from '$/containers/Layouts/Main';
import { Content } from '$/containers/Layouts/Main/styles';

export const Container = styled(MainLayout)`
  ${Content} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;
