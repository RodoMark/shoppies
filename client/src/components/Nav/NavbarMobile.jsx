import React from 'react'
import { useHistory } from 'react-router-dom';

import BannerMobile from '../Banners/BannerMobile'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default function NavbarMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()

  return (
    <nav id="nav-mobile">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => handleClick(event)}>
        Menu
      </Button>
      <Menu
        id="nav-mobile-open"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose()
          history.push('/')
          }}
        >Home</MenuItem>
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
      <BannerMobile />
    </nav>
  );
}