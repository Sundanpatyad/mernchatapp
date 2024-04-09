import React, { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../../services/api';
import { Box, styled } from '@mui/system'; // Fix: Import styled from '@mui/system' instead of '@mui/material'
import Conv from './Conv';
import { AccountContext } from '../../../context/AccountProvieder'; // Typo in 'AccountProvieder'?

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

function Conversation({ text }) {
  const [users, setUsers] = useState([]);
  const { account ,socket , setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filterData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
}, [account])

  return (
    <Component>
      {users.map(user => (
        user.sub !== account.sub && <Conv key={user.sub} user={user} />
      ))}
    </Component>
  );
}

export default Conversation;
