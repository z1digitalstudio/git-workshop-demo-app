import { Container, Content, Title } from './styles';
import type { Props } from './types';

export default function MainLayout({
  className,
  children,
}: Props): JSX.Element {
  return (
    <Container className={className}>
      <Title>Demo App</Title>
      <Content>{children}</Content>
    </Container>
  );
}
