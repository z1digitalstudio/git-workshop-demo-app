import { useEffect, useMemo, useRef, useState } from 'react';

export function useTagOverflow({ children }: { children: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstHiddenIndex, setFirstHiddenIndex] = useState(Infinity);

  useEffect(() => {
    if (containerRef.current) {
      let remainingWidth = containerRef.current.clientWidth - 36;

      setFirstHiddenIndex(
        Array.from(containerRef.current.childNodes).reduce((acc, node, i) => {
          // If the acc stopped incrementing, it means that we already ran out
          // of space.
          if (acc !== i) {
            return acc;
          }

          if (!(node instanceof HTMLSpanElement)) {
            return acc;
          }

          const { marginRight } = getComputedStyle(node);

          const willConsume =
            node.clientWidth + (parseInt(marginRight ?? '', 10) ?? 0);

          if (remainingWidth > willConsume) {
            remainingWidth -= willConsume;
            return acc + 1;
          }

          return acc;
        }, 0),
      );
    }
  }, [containerRef]);

  const anyHidden = firstHiddenIndex < children.length;

  const visibleTags = useMemo(
    () => children.filter((_, i) => i < firstHiddenIndex),
    [children, firstHiddenIndex],
  );

  const totalHidden = children.length - firstHiddenIndex;
  const moreTagsTitle = children
    .splice(firstHiddenIndex, children.length)
    .join(', ');
  const moreTagsLabel = `+ ${totalHidden}`;

  return {
    anyHidden,
    containerRef,
    moreTagsLabel,
    moreTagsTitle,
    visibleTags,
  };
}
