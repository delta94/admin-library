import React, { useState, SyntheticEvent } from 'react';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneRounded';
import {
  Menu,
  MenuItem,
  Avatar,
  Badge,
} from '@material-ui/core';
import { Profile } from 'types';
import styled from 'styled-components';
import { Caption14, Caption12, GRAY_100, textOverflowStyles } from 'styles';
import { useTranslation } from 'react-i18next';

interface Props {
  menuItems: { title: string; onClick: () => void }[];
  user: Profile | null;
  companyName?: string;
}

const UserButton = (props: Props) => {
  const { t } = useTranslation();
  const { menuItems, user, companyName = t('no_company_name') } = props;
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = !!anchorEl;

  if (!user) return null;

  const handleOpenMenu = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClick = (e: SyntheticEvent) => {
    e.stopPropagation();

    console.log('Notifications clicked');
  };

  return (
    <div>
      <User onClick={handleOpenMenu}>
        <StyledAvatar alt={user.username} src={user.photo_url} />
        <UserText>
          <UserName>
            {user.username}
          </UserName>
          <CompanyName color={GRAY_100}>
            {companyName}
          </CompanyName>
        </UserText>
        <StyledBadge onClick={handleNotificationsClick} badgeContent={5} color="secondary">
          <NotificationsIcon />
        </StyledBadge>
      </User>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleCloseMenu}
      >
        {menuItems.map(({ title, onClick }) => (
          <MenuItem key={title} onClick={onClick}>
            {title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default React.memo(UserButton);

const StyledAvatar = styled(Avatar)`
  && {
    width: 32px;
    height: 32px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserText = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

const StyledBadge = styled(Badge)`
  flex-shrink: 0;
`;

const UserName = styled(Caption14)`
  ${textOverflowStyles}
`;

const CompanyName = styled(Caption12)`
  ${textOverflowStyles}
`;
