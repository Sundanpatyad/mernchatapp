import React from 'react'
import { MoreVert } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import styled from '@emotion/styled';

const MenuOption = styled(MenuItem)`
  color: white;
  padding: 10px 30px;
  background-color: black;

  &:hover {
    background-color: #35424a; 
    cursor: pointer;
  }

`;


function HeaderMenu({setOpenDrawer}) {
    
    const handleClick = (event) => {
       setOpen(event.currentTarget);
    };
    const handleClose = () => {
      setOpen(null);
    };
    const [open, setOpen] = useState(null);
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
               anchorOrigin={{
                vertical:"bottom",
                horizontal:'center'
               }}
               transformOrigin={{
                vertical:'top',
                horizontal:'right'
               }}
            >
                <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu