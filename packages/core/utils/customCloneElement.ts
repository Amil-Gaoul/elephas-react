import { jsx } from '@emotion/core';
// eslint-disable-next-line import/prefer-default-export
export function customCloneElement(element: any, props: any) {
  return jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });
}
