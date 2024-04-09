import React from 'react';
import { useContext ,useState } from 'react';
import { AccountContext } from '../../../context/AccountProvieder';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';
import AddAlertIcon from '@mui/icons-material/AddAlert';



const Image = styled("img")({
   height: 30, 
   width: 30,
   borderRadius:'50%',
   marginLeft:'10px',
   
});
const Wrapper =styled(Box)`
  display:flex;
  gap:15px;
  align-items:center;
`
const  Component = styled(Box)`
height :44px;
display:flex;
justify-content:space-between;
padding:5px 15px;
align-items:center;
background-color:#1A1A1A;
margin-bottom:10px;

`
const Chats = styled(Typography)`
font-size:25px;
font-weight:bolder;
margin-left:10px;
`;
function Header() {
  const [openDrawer , setOpenDrawer] =useState(false);
    const { account } = useContext(AccountContext);
    const toggleDrawer = ()=>{
      setOpenDrawer(true);
    }
  return (
    <>
    <Component>
        <Chats>Messages</Chats>
        <Wrapper>
        <AddAlertIcon/>
        <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        <Image src={account.picture} alt=""   onClick={()=> toggleDrawer()}/>

        </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}
    />
    </>
  )
}

export default Header