import {
  Container,
  Content,
  DirectedBy,
  Director,
  DirectorImage,
  DirectorInfo,
  DirectorName,
  Image,
  Title,
} from './styles';
import type { Props } from './types';

export default function MovieCard({
  director,
  directorImage,
  image,
  name,
}: Props): JSX.Element {
  return (
    <Container>
      <Image alt="" src={image} />
      <Content>
        <Title title={name}>{name}</Title>
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
