import { Container } from './styles';
import type { Props } from './types';

import Tag from '$/components/Tag';

export default function Tags({ children }: Props): JSX.Element {
  return (
    <Container>
      {children.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Container>
  );
}
