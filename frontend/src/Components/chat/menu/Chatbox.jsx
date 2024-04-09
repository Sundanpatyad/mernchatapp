
import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Search from './Search';
import styled from '@emotion/styled';
import Conversation from './Conversation';
import { useState } from 'react';

const Component = styled(Box)`
background-color:#161616;

margin:10px;

overflow:hidden;
border-radius:20px;
height:93vh;
`
function Chatbox() {
  const [text , setText] = useState('');

  return (
    <Component>
        <Header/>
        <Search setText={setText}/>
        <Conversation text={text}/>
    </Component>
  )
}

export default Chatbox