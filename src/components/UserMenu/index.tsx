import React, { useState, SyntheticEvent, ReactElement } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  IconButton,
  Menu,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';

interface Props {
  menuItems: { title: string; onClick: () => void }[];
  user: any;
  loginButton: ReactElement;
  loading: boolean;
}

const UserButton = (props: Props) => {
  const { menuItems, user, loginButton, loading } = props;
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = !!anchorEl;

  if (loading) return <CircularProgress color="primary" />;

  if (!user) return loginButton;

  const handleOpenMenu = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleOpenMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
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
