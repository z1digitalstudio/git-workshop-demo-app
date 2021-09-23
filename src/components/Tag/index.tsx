import React, { memo } from 'react';

import { Container } from './styles';
import type { Props } from './types';

function Tag({ children, title }: Props): JSX.Element {
  return <Container title={title}>{children}</Container>;
}

export default memo(Tag);
