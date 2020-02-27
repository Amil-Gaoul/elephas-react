/** @jsx jsx */
import {
  forwardRef, Ref, Children, isValidElement,
} from 'react';
import { jsx } from '@emotion/core';

import { BreadcrumbsProps } from './types';
import {
  list,
  listItem,
} from './styles';
import { customCloneElement } from '../utils/customCloneElement';

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (props: BreadcrumbsProps, ref: Ref<HTMLElement>) => {
    const {
      children,
      className,
    } = props;

    const createItemsFromChildren = () => Children
      .toArray(children)
      .filter((child) => child && isValidElement(child))
      .map((child) => customCloneElement(child, { css: [listItem] }));

    return (
      <nav ref={ref} css={list} className={className}>
        {createItemsFromChildren()}
      </nav>
    );
  },
);
