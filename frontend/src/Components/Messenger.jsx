import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvieder'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import LoginDialog from './account/LoginDialog'
import ChatDialog from './chat/ChatDialog'

const LoginHeader = styled(AppBar)`;
height:200px;
background-color:#00A884;
`

const Component = styled(Box)`
    height: 100vh;
   background-color:#0F0F0F;
  backgroundImage:'url("https://img.freepik.com/free-vector/colorful-background-concept_23-2148452453.jpg")';

`;
function Messenger() {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? <> <Toolbar></Toolbar><ChatDialog /> </> : <> <LoginDialog /></>
    }

    </Component>
  )
}

export default Messenger