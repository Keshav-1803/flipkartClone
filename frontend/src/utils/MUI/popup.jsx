import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { capitalize, colors } from '@mui/material';
import flipkartPlusIcon from '../../assets/fkplus-icon.svg'
import BorderInnerIcon from '@mui/icons-material/BorderInner';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export default function MenuPopupState({ name }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Button
        onMouseEnter={handleMouseEnter}
        aria-controls={open ? 'hover-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <span className='text-lg text-gray-700 capitalize hover:text-white'>
          <AccountCircleIcon className='mr-1' />
          {name}
          <ExpandMoreIcon className='ml-1' />
        </span>
      </Button>
      <Menu
        id="hover-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        MenuListProps={{
          onMouseLeave: handleMouseLeave,
        }}
        
      >
        <div className='flex flex-col justify-center'>
            <h1 className='text-center'>
                New customer?
            </h1>
            <Button sx={{color: 'blue', fontWeight:700, textTransform:'capitalize'}}>
                Sign Up
            </Button>
        </div>

        <hr/>
        <MenuItem onClick={handleMouseLeave} sx={{display: 'flex', gap:'10px'}}><AccountCircleIcon/> My Profile</MenuItem>
        <MenuItem onClick={handleMouseLeave} sx={{display: 'flex', gap:'10px' }}><img src={flipkartPlusIcon}/> Flipkart Plus Zone</MenuItem>
        <MenuItem onClick={handleMouseLeave} sx={{display: 'flex', gap:'10px' }}>
        <BorderInnerIcon/>Orders</MenuItem>
        <MenuItem onClick={handleMouseLeave} sx={{display: 'flex', gap:'10px' }}><FavoriteBorderIcon/>Wishlist</MenuItem>
        <MenuItem onClick={handleMouseLeave} sx={{display: 'flex', gap:'10px' }}><RedeemIcon/>Rewards</MenuItem>
        <MenuItem onClick={handleMouseLeave} sx={{display: 'flex', gap:'10px' }}><RequestQuoteIcon/>Gift Cards</MenuItem>
      </Menu>
    </div>
  );
}
