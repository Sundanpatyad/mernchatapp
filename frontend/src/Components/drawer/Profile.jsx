import React from 'react';
import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvieder';

const ImgCont = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled('img')({
    width:200,
    height:200,
    borderRadius:"50%",
    padding:"20px 0px"


})
const Name = styled(Box) `
padding :10px 30px;

&:last-child{
    margin:14px 0px;
    color:#D1C8A5;
    font-size:10px;
}
`
const About = styled(Box) `
padding :10px 30px;
`



function Profile() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImgCont>
        <Image src={account.picture} alt='dp' />
      </ImgCont>
      <Name>
        <p style={{color:"#7CB9E8"}}>Your Name</p>
        <p  style={{color:"#dadada"}}>{account.name}</p>
      </Name>
      <Box>
        <Name>
            This is a Chat APP Profile Drawer Created using ReactJS By Sundan Sharma
        </Name>
      </Box>
      <About>
      <p style={{color:"#7CB9E8"}}>About</p>
        <p  style={{color:"#dadada"}}>Keep It Simple 😉</p>

      </About>
    </>
  );
}

export default Profile;
