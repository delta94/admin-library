import styled, { css } from 'styled-components';
import { WHITE } from 'styles';

export const optionStyles = css`
  position: relative;
  height: 36px;
  width: 100%;
  padding: 0 6px 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background: ${WHITE};
    transition: opacity 0.12s ease-in-out;
  }

  :hover {
    ::before {
      opacity: 0.1;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
