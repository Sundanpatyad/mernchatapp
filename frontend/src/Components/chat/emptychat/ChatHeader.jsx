 import { useContext } from 'react';
import { Box , Typography , styled } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AccountContext } from '../../../context/AccountProvieder';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import ForumIcon from '@mui/icons-material/Forum';

const Header = styled(Box)`
height:44px;
background-color:#323337;
display:flex;
align-items:center;
padding:8px 16px;`

const Image = styled('img')({
    height:30,
    borderRadius:50

})
const Right = styled(Box)`
margin-left:auto;

& > svg {
    padding:8px;
    font-size:20px
}
`

const Name = styled(Typography)`
margin-left:12px;`

const Status = styled(Typography)`
margin-left:12px;
font-size:10px;
color:#dadada`

const handleClick = () => {
        
    window.location.href = "https://meet.google.com/"; }
function ChatHeader({person}) {
    
  
    const {activeUsers } = useContext(AccountContext);
  return (
   <Header>
    <Image src={person.picture} alt="" />
    <Box>
        <Name>{person.name}</Name>
        <Status> {activeUsers?.find(user => user.sub === person.sub)? 'Online🟢' : 'Offline🔴'}</Status>
    </Box>
    <Right>
        <CallIcon/>
        <VideocamIcon onClick={(e) => { e.stopPropagation(); handleClick(); }} />
        
        <ForumIcon/>
        <MoreHorizIcon/>
    </Right>
   </Header>
  )
}

export default ChatHeader;