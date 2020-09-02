import styled from 'styled-components';
import { SCREEN_SIZE } from 'const';

const { TABLET, LAPTOP, DESKTOP } = SCREEN_SIZE;
const getWithString = (span: number) => `width: ${(span / 12) * 100}%`;

interface ColProps {
  xs?: number;
  sm?: number;
  lg?: number;
  xl?: number;
}

export const Col = styled.div<ColProps>`
  float: left;
  ${({ xs }) => xs ? getWithString(xs) : 'width: 100%'};

  @media only screen and (min-width: ${TABLET}) {
    ${({ sm }) => sm && getWithString(sm)};
  }

  @media only screen and (min-width: ${LAPTOP}) {
    ${({ lg }) => lg && getWithString(lg)};
  }

  @media only screen and (min-width: ${DESKTOP}) {
    ${({ xl }) => xl && getWithString(xl)};
  }
`;

export const Row = styled.div<{ gap?: string }>`
  &::after {
    content: "";
    clear: both;
    display: table;
  }

  margin: ${({ gap = '0px' }) => `0 calc(-${gap} / 2)`};

  & > ${Col} {
    padding: ${({ gap = '0px' }) => `0 calc(${gap} / 2)`};
  }
`;

const Grid = { Row, Col };

export default Grid;
