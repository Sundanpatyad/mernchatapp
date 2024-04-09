import { useContext } from 'react';
import { Dialog , Box ,styled } from '@mui/material'
import React from 'react'
import Chatbox from './menu/Chatbox';
import EmptyChat from './emptychat/EmptyChat';
import ChatBox from './emptychat/ChatBox';
import { AccountContext } from '../../context/AccountProvieder';

const dialog = {
  height: '96%',
  width: '100%',
  margin: '20px',
  maxWidth: "1600px",
  maxHeight: '100%',
  overflow: 'hidden',
  boxShadow: 'none',
  backgroundColor: 'black', 
  color: 'white',
  borderRadius:'20px',
};



  const Component = styled(Box)`
  display:flex;
 
  justify-content:center;
  align-items:center;

  overflow:none;
  

  `;
  const LeftComponent = styled(Box)`
  min-width:400px;
 
  `
  const RightComponent = styled(Box)`
  width:73%;
  min-width:300px;
  height:100%;
  
  
  overflow-y:hidden;
  border-radius:20px;
  border-left: 1px solid rgva(0,0,0,0.14);
 
   `
function ChatDialog() {
  const { person } = useContext(AccountContext);
  return (
    <>
     <Dialog open={true} PaperProps={{ sx: dialog }} maxWidth={'md'}>
    <Component >
        <LeftComponent>
            <Chatbox/>
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />   }
        </RightComponent>
    </Component>
    </Dialog>
    </>
  )
}

export default ChatDialog