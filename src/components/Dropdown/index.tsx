import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { BLACK_800, GRAY_200, PURPLE_500, Caption12, WHITE, PURPLE_400 } from 'styles';
import { ArrowDownIcon } from 'assets/icons';

const getTitleColor = (open: boolean, variant: 'default' | 'contained') => {
  if (variant === 'contained') return WHITE;

  return open ? GRAY_200 : PURPLE_400;
};

const getTitleBackground = (open: boolean, variant: 'default' | 'contained') => {
  if (variant === 'default') return 'transparent';

  return open ? GRAY_200 : PURPLE_500;
};

interface Props {
  className?: string;
  title: string;
  variant?: 'default' | 'contained';
  children: ReactNode;
  showToggleIcon?: boolean;
}

const Dropdown = (props: Props) => {
  const { className, title, children, showToggleIcon = true, variant = 'default' } = props;
  const [open, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const newIsOpen = !open;
    setIsOpen(newIsOpen);
  };

  const handleBlur = () => setIsOpen(false);

  const titleColor = getTitleColor(open, variant);
  const titleBackgroundColor = getTitleBackground(open, variant);

  return (
    <Wrapper
      className={className}
      onClick={toggleOpen}
      onBlur={handleBlur}
      tabIndex={1}
    >
      <TitleWrapper color={titleColor} backgoundColor={titleBackgroundColor}>
        {showToggleIcon && <StyledIcon open={open} color={titleColor} />}
        {title}
      </TitleWrapper>
      <Menu className="dropdown-menu" open={open}>
        {children}
      </Menu>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Dropdown, areEqual);

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;
`;

const TitleWrapper = styled(Caption12)<{ backgoundColor: string }>`
  background-color: ${({ backgoundColor }) => backgoundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 6px 3px 4px;
  border-radius: 2px;
`;

const Menu = styled.div<{ open: boolean }>`
  position: absolute;
  margin-top: 4px;
  top: 100%;
  left: 0;
  z-index: 5;
  padding: 16px;
  background-color: ${BLACK_800};
  border-radius: 2px;
  display: ${({ open }) => open ? 'block' : 'none'};
  width: 200px;
  height: 216px;
  overflow-y: auto;
`;

const StyledIcon = styled(ArrowDownIcon) <{ open: boolean; color: string }>`
  transition: transform .3s ease-in-out;
  margin: 4px;
  ${({ open }) => open && `
    transform: rotate(180deg);
  `}

  path {
    fill: ${({ color }) => color};
  }
`;
