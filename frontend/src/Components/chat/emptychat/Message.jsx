import React from 'react'
import { Box , Typography , styled } from '@mui/material';
import { formatDate } from '../../../utils/common-utils';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvieder';
const Wrapper = styled(Box)`
background-color:#1B1212;
max-width:50%;
margin-left:auto;
padding:10px;
width:fit-content;
display:flex;
border-radius:20px;
word-break : break-word;
margin-top:15px;
margin-right:30px;

`
const WrapperR = styled(Box)`
margin-top:15px;
margin-left:30px;
background-color:#4B5F4D;
color:white;
max-width:50%;
padding:10px;
width:fit-content;
display:flex;
border-radius:20px;
word-break : break-word;
`

const Text = styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;
`

const Time =styled(Typography)`
font-size:10px;
color:#dadada;
margin:top:6px;
word-break:keep-all;
margin-top:auto;

`
const Time1 =styled(Typography)`
font-size:10px;
color:#dadada;
margin:top:6px;
word-break:keep-all;
margin-top:auto;
color:white;
`
const Image = styled('img')({
  height:30,
  borderRadius:50,
}) 
function Message({message}) {
    const { account , person } = useContext(AccountContext);
  return (
    <>
    {
        account.sub === message.senderId ?
    <Wrapper>
      <Image src={account.picture} alt="" />
       
        <Text>{message.text}</Text>
        <Time>{formatDate(message.createdAt)}</Time>
    </Wrapper>
    :
    <WrapperR>
        <Image src={person.picture} alt="" />
        <Text>{message.text}</Text>
        <Time1>{formatDate(message.createdAt)}</Time1>
    </WrapperR>
    }

  
    
    </>
  )
}

export default Message