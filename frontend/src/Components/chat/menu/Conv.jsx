import { useContext , useEffect , useState} from 'react';
import { Box,  Typography , styled } from '@mui/material';
import React from 'react';

import { setConversation ,getConversation} from '../../../services/api';
import { AccountContext } from '../../../context/AccountProvieder';
import { formatDate } from '../../../utils/common-utils';
const Component = styled(Box)`
    display: flex;
    height: auto;
    margin: 15px 10px;
    padding:10px 0px;
    cursor: pointer;
    border-radius:10px;
    border:1px solid #323337;
    background-color:#212121;


    &:hover {
        border:1px solid #dadada;
        background-color: #4B5F4D ; /* Change background color on hover */
        /* Add other hover effects as needed */
    }
`;
const Bordebox = styled(Box)`


width:100%`
const Image = styled('img')({
    width: 40,
    height: 40,
    borderRadius: '50%',
    padding: '0px 14px' 
});

const Name = styled(Typography)`
font-size:14px;

`
const Container = styled(Box)`
  display:flex;
`;
const TimeStamps = styled(Box)`
font-size:12px;
margin-left:auto;
color:#dadada;
margin-right:15px;
`
const Text = styled(Box)`
font-size:14px;
color:#dadada;
`
const Status = styled(Typography)`
margin-top:5px;
font-size:10px;
color:#dadada`

function Conv({user}) {
    const {activeUsers , person } = useContext(AccountContext);
    const { setPerson , account  , newMessageFlag} = useContext(AccountContext);
    const [message , setMessage] =useState({});



    useEffect(()=>{
        const getConversationDetails =async () =>{
          const data =  await getConversation({senderId : account.sub, receiverId:user.sub});
          setMessage({text: data?.message , timestamp : data?.updatedAt})

        }
        getConversationDetails();
    },[newMessageFlag , account.sub , user.sub])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderID: account.sub, receiverId: user.sub });
    
       ;
    }
    
  return (
   <Box>
     <Component name="Conv" onClick={( ) => getUser()} >

<Box>
<Image src={user.picture} alt="" />
</Box>
<Bordebox >
<Container>
   <Name>{user.name}</Name>
   {
       message?.text &&
       <TimeStamps>{formatDate(message?.timestamp)}</TimeStamps>
   }
</Container>
<Box>
<Status>
       {
           user.email
       }
   </Status>
   <Text>
    Message : 
        {
           message?.text?.includes('localhost') ? 'media' : message.text
       }
   </Text>
   <Status>
   {activeUsers?.find(user => user.sub === person.sub)? 'Online🟢' : 'Offline🔴'}
   </Status>
</Box>
</Bordebox>

</Component>
   </Box>
  )
}

export default Conv