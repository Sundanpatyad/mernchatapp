import { useContext, useEffect, useState } from 'react'
import { Box , styled } from '@mui/material'
import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { getConversation } from '../../../services/api'
import { AccountContext } from '../../../context/AccountProvieder'

function ChatBox() {
const { person, account } = useContext(AccountContext);

const [conversation , setConversation] = useState({});
useEffect(() => {
  const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
      setConversation(data);
  }
  getConversationDetails();
}, [person.sub,account.sub]);

const Comp = styled(Box)`
border-radius:20px;
margin:10px;
margin-left:0px;
overflow:hidden;`
  return (
   <Comp>
    <ChatHeader person={person}/>
    <Messages  person={person} conversation={conversation}/>
   </Comp>
  )
}

export default ChatBox