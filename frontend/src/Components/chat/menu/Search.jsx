import React from 'react';
import { Box, styled } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputBase from '@mui/material/InputBase';



const Component = styled(Box)`
  
height: 35px;
 padding:3px;
  background-color:#323337;
  color: white;
  display: flex;
  align-items: center;
  margin:0px 20px;
  border-radius:50px;
`;
const Wrapper = styled(Box)`
  position: relative;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 8px;
  top:-3px;
  color:grey;
`;
const Input = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 60px;
  height: 15px;
  color:#dadada;

  &::placeholder {
    color:grey; 
  }
`;

function Search({setText}) {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Input placeholder='Search or Start New Chat' 
        onChange={(e)=>setText(e.target.value)}/>
      </Wrapper>
    </Component>
  );
}

export default Search;
