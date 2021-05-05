import React from 'react'
import { useHistory } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()

  return (
    <div>
      <Button id="mobile-nav" aria-controls="simple-menu" aria-haspopup="true" onClick={() => handleClick()}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose()
          history.push('/')
          }}
        >Logout</MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          history.push('/search')
          }}
        >Search</MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          history.push('/nominations')
          }}
        >Nominations</MenuItem>
        
      </Menu>
    </div>
  );
}