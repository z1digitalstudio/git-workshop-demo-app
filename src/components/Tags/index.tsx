import { useTagOverflow } from './logic';
import { Container } from './styles';
import type { Props } from './types';

import Tag from '$/components/Tag';

export default function Tags({ children }: Props): JSX.Element {
  const { anyHidden, containerRef, moreTagsLabel, moreTagsTitle, visibleTags } =
    useTagOverflow({ children });

  return (
    <Container ref={containerRef}>
      {visibleTags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      {anyHidden && (
        <Tag key="more-tags" title={moreTagsTitle}>
          {moreTagsLabel}
        </Tag>
      )}
    </Container>
  );
}
