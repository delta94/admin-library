import React, { useState, SyntheticEvent } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import { Profile } from 'types';

interface Props {
  menuItems: { title: string; onClick: () => void }[];
  user: Profile;
}

const UserButton = (props: Props) => {
  const { menuItems, user } = props;
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = !!anchorEl;

  const handleOpenMenu = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleOpenMenu}
        color="inherit"
        startIcon={<AccountCircle />}
      >
        {user.username}
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
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
