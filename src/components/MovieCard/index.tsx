import { format } from 'date-fns/fp';

import {
  Container,
  Content,
  DirectedBy,
  Director,
  DirectorImage,
  DirectorInfo,
  DirectorName,
  Image,
  ReleaseDate,
  Title,
} from './styles';
import type { Props } from './types';

import Tags from '$/components/Tags';

const formatYear = format('yyyy');

export default function MovieCard({
  director,
  directorImage,
  image,
  name,
  releaseDate,
  tags,
}: Props): JSX.Element {
  return (
    <Container>
      <Image alt="" src={image} />
      <Content>
        <Tags>{tags}</Tags>
        <Title title={`${name} (${formatYear(releaseDate)})`}>
          {name} <ReleaseDate>({formatYear(releaseDate)})</ReleaseDate>
        </Title>
        <Director>
          <DirectorImage alt="" src={directorImage} />
          <DirectorInfo>
            <DirectedBy>Directed by</DirectedBy>
            <DirectorName>{director}</DirectorName>
          </DirectorInfo>
        </Director>
      </Content>
    </Container>
  );
}
