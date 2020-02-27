/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TooltipProps } from './types';
import {
  tooltipWrapper,
  tooltipBase,
  tooltipPositions,
  tooltipText,
} from './styles';

function Tooltip(props: TooltipProps) {
  const {
    children,
    className,
    text,
    position,
  } = props;

  return (
    <div css={[tooltipWrapper]}>
      <div
        css={[
          tooltipBase,
          tooltipPositions[position],
        ]}
        className={className}
      >
        <span css={tooltipText}>
          { text }
        </span>
      </div>
      { children }
    </div>
  );
}

export default Tooltip;
