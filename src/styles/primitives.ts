import styled, { css } from 'styled-components';

import checkIconImage from '../assets/icons/check-icon.svg';
import searchIconImage from '../assets/icons/search-icon.svg';
import calendarIconImage from '../assets/icons/calendar-icon.svg';

import {
  WHITE,
  PURPLE_500,
  PURPLE_400,
  PURPLE_600,
  RED_500,
  GRAY_100,
  BLACK_600,
  GRAY_200,
  BLACK_500,
} from './colors';

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

export const H1 = styled.h1<{ color?: string }>`
  ${colorStyles}
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
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

export const buttonStyles = css<{ color?: string; disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: ${({ color = PURPLE_500 }) => color};
  border: none;
  border-radius: 3px;
  outline: none;
  color: ${WHITE};

  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: opacity .3s ease-in-out;

  :active {
    opacity: 0.7;
  }
`;

export const PurpleButton = styled.button`
  ${buttonStyles}
  ${textOverflowStyles}
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 12px 20px;

  :hover {
    background: ${PURPLE_600};
  }
`;

export const PurpleOutlinedButton = styled.button.attrs({ color: 'transparent' })`
  ${buttonStyles}
  border-radius: 2px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ disabled }) => disabled ? GRAY_200 : PURPLE_400};
  text-transform: capitalize;
  border: 1px solid ${({ disabled }) => disabled ? BLACK_500 : PURPLE_400};
  padding: 2px 12px;

  ${({ disabled }) => !disabled && `
    :hover {
      background: ${PURPLE_400};
      color: ${WHITE};
    }
  `}
`;

export const inputStyles = css<{ error?: boolean }>`
  background-color: ${BLACK_600};
  color: ${WHITE};
  font-size: 14px;
  line-height: 22px;
  border-radius: 2px;
  border: none;
  padding: 0 12px;
  outline: none;
  width: 100%;

  ::placeholder {
    color: ${GRAY_100};
  }

  ${({ error }) => error && `
    border-bottom: 1px solid ${RED_500};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

export const Input = styled.input<{ error?: boolean }>`
  ${inputStyles}
  height: 40px;

  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    background-image: url(${calendarIconImage});
    background-repeat: no-repeat;
  }

  ${({ type }) => type === 'search' && `
    padding-left: 34px;
    background-image: url(${searchIconImage});
    background-position: 13px 50%;
    background-repeat: no-repeat;
  `}
`;

export const Switch = styled.input.attrs({ type: 'checkbox' })<{ color?: string }>`
  position: relative;
  width: 36px;
  height: 20px;
  margin: 0;
  vertical-align: top;

  background: ${BLACK_600};
  border-radius: 15px;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.3s ease-in-out;

  ::after {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 14px;
    height: 14px;
    background-color: ${GRAY_200};
    border-radius: 50%;
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
  }

  :checked {
    background-color: ${({ color = PURPLE_500 }) => color};

    ::after {
      transform: translateX(calc(100% + 3px));
      background-color: ${WHITE};  
    }
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })<{ color?: string }>`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;
  vertical-align: top;

  background: transparent;
  border: 1px solid ${GRAY_200};
  border-radius: 1px;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.3s ease-in-out;

  ::after {
    content: "";
    position: absolute;
    background-image: url(${checkIconImage});
    background-size: cover;
    transition: all 0.3s ease-in-out;
    width: 6.5px;
    height: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  :checked {
    background-color: ${({ color = PURPLE_500 }) => color};
    border-color: ${({ color = PURPLE_500 }) => color};

    ::after {
      opacity: 1;
    }
  }

  :hover {
    border-color: ${({ color = PURPLE_500 }) => color};
  }
`;

export const SquareIconButton = styled.button`
  ${buttonStyles}
  background-color: transparent;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  border: 1px solid ${BLACK_500};
  justify-content: center;
  transition: all 0.3s ease-in-out;

  path {
    transition: all 0.3s ease-in-out;
  }

  :hover {
    border: 1px solid ${({ color }) => color};

    path {
      fill:  ${({ color }) => color};
    }
  }
`;
