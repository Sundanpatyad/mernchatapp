import React from 'react';
import { Drawer , Box} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './Profile';

const drawerStyle = {
  left: 20,
  top: 14,
  width:'400px',
  backgroundColor: 'black',
  color:'white' ,
  boxShadow:'none',
  borderRadius:"20px"// Set background color to black
};

function InfoDrawer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const Profiles = styled(Box)`
  display:flex;
  align-items:center;
  gap:10px;
  padding: 10px 20px; 
  background:#1A1A1A;

 
  `;
  const Component = styled(Box)`
  background-color:#1A1A1A; 
  height:84.5% `

  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }} 
        style={{ zIndex: 1500 }}
      >
        <Profiles>
        <ArrowBackIcon onClick={()=>setOpen(false)} /><h4>Profile</h4>
        </Profiles>
        <Component>
          <Profile/>
        </Component>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
