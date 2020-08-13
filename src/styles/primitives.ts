import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

import { WHITE, PURPLE_500, PURPLE_400 } from './colors';

const colorStyles = css<{ color?: string }>`
  color: ${({ color = WHITE }) => color};
`;

export const textOverflowStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Body = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 13px;
  font-weight: bold;
`;

export const H2 = styled.h2<{ color?: string }>`
  ${colorStyles}
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const H2Bold = styled(H2)`
  font-weight: bold;
`;

export const H3 = styled.h3<{ color?: string }>`
  ${colorStyles}
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
`;

export const H3Bold = styled(H3)`
  font-weight: bold;
`;

export const H3_14 = styled(H3)`
  font-size: 13px;
  line-height: 20px;
`;

export const Caption14 = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 14px;
  line-height: 22px;
`;

export const Caption13 = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 12.5px;
  line-height: 18px;
  letter-spacing: 0.01em;
`;

export const Caption13Bold = styled(Caption13)`
  font-weight: bold;
`;

export const Caption13Link = styled(Caption13)`
  text-decoration-line: underline;
`;

export const Caption10 = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 10px;
  line-height: 14px;
`;

export const Caption10Bold = styled(Caption10)`
  font-weight: bold;
`;

export const Caption11 = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 11px;
  line-height: 16px;
`;

export const Caption11Bold = styled(Caption11)`
  font-weight: bold;
`;

export const Caption12 = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 12px;
  line-height: 18px;
`;

export const Caption12Bold = styled(Caption12)`
  font-weight: bold;
`;

export const Micro10 = styled.span<{ color?: string }>`
  ${colorStyles}
  font-size: 10px;
  line-height: 14px;
`;

export const Micro10Bold = styled(Micro10)`
  font-weight: bold;
`;

export const Caps = styled.span<{ color?: string }>`
  ${colorStyles}
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Caps11 = styled(Caps)`
  font-size: 11px;
  line-height: 16px;
`;

export const Caps11Bold = styled(Caps11)`
  font-weight: bold;
`;

export const Caps10 = styled(Caps)`
  font-size: 10px;
  line-height: 16px;
`;

export const Caps10Bold = styled(Caps10)`
  font-weight: bold;
  letter-spacing: 0.08em;
`;

export const Caps14Bold = styled(Caps)`
  font-size: 14px;
  letter-spacing: 0.08em;
  font-weight: bold;
`;

export const PurpleButton = styled(Button).attrs({ variant: 'contained', color: 'primary' })`
  background: ${PURPLE_500};
  border-radius: 2px;
  font-size: 12px;
  line-height: 18px;
  color: ${WHITE};
  text-transform: capitalize;

  :hover {
    background: ${PURPLE_400};
  }
`;
