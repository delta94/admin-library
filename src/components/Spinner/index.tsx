import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PURPLE_500 } from 'styles';

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const Spinner = (props: Props) => {
  const { color = PURPLE_500, size = 14, className } = props;
  const lineWidth = Math.ceil(size / 10);

  return (
    <Svg className={className} color={color} size={size} lineWidth={lineWidth}>
      <circle cx={size / 2} cy={size / 2} r={(size - lineWidth) / 2} />
    </Svg>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Spinner, areEqual);

const getSpinner = (size: number) => keyframes`
  0% {
    transform: rotate(0deg);
    stroke-dashoffset: ${0.66 * size};
  } 50% {
    transform: rotate(720deg);
    stroke-dashoffset: ${3.14 * size};
  } 100% {
    transform: rotate(1080deg);
    stroke-dashoffset: ${0.66 * size};
  }
`;

const Svg = styled.svg<{ size: number; color: string; lineWidth: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  viewBox: ${({ size }) => `0 0 ${size} ${size}`};

  circle {
    fill: transparent;
    stroke: ${({ color }) => color};
    stroke-width: ${({ lineWidth }) => lineWidth};
    stroke-linecap: round;
    stroke-dasharray: ${({ size }) => 3.14 * size};
    transform-origin: ${({ size }) => `${size / 2}px ${size / 2}px 0`};;
    animation: ${({ size }) => getSpinner(size)} 2s linear infinite;
  }
`;
