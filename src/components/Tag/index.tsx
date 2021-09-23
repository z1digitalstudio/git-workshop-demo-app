import React, { memo } from 'react';

import { Container } from './styles';
import type { Props } from './types';

function Tag({ children }: Props): JSX.Element {
  return <Container>{children}</Container>;
}

export default memo(Tag);
