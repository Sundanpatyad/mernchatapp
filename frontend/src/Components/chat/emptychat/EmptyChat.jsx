import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const EmptyChatBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;
const Title = styled(Typography)`
font-size:30px;`
const Image = styled('img')({
  height: 300,
  width: 300,
  marginTop:120
});
const SubTitle = styled(Typography)`
color:#dadada
font-weight:light;
font-size:14px;`

function EmptyChat() {
  return (
    <Box>
      <EmptyChatBox>
        <Image src="linked in .png" alt="" />
        <Title>Chat APP</Title>
        <SubTitle>Effortlessly connect and converse with anyone, anywhere, anytime</SubTitle>
        <SubTitle>Share moments vividly with multimedia messaging and real-time updates.</SubTitle>
        <SubTitle>Stay in the loop with group chats, enhancing collaboration and community.</SubTitle>
        
        
      </EmptyChatBox>
    </Box>
  );
}

export default EmptyChat;
