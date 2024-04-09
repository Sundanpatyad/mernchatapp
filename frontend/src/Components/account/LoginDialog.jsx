import React from 'react';
import { useContext } from 'react';
import { Dialog, Typography, Box, List, ListItem, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { AccountContext } from '../../context/AccountProvieder';
import { jwtDecode } from 'jwt-decode';
import { addUser } from '../../services/api';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Component = styled(Box)`

  display: flex;
  align-items:center;
  justify-content:space-between;
  padding:10px 30px;

`;

const Container = styled(Box)`
  
`;

const QRCode = styled('img')({
  height: 300,
  borderRadius: 20,
  
  margin: '50px 0px 0px 50px',
  backgroundImage:'url("")'
});

const Head = styled('video')({
  height: 70,
  width:150,
  objectFit:'cover',
  marginRight:'10px',
  borderRadius:'10px',

  backgroundImage:'url("")'
});

const Title = styled(Typography)`
  margin-top:20px;
  font-size: 26px;
  font-weight: 400;
 
  text-align:center;
`;
const Title1 = styled(Typography)`
  font-size: 100px;
  font-weight: 400;
  margin-bottom: 20px;
 line-height:85px;
 font-size:bolder;
 letter-spacing:-4px;
 font-weight:700;
 margin-top:90px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const dialog = {
  height: '96%',
  width: '96%',
  maxWidth: '1600px',
  maxHeight: '100%',
  borderRadius:'20px',
  
  overflow: 'none',
  boxShadow: 'none',
  backgroundColor: 'rgb(35, 35, 35)',
  color: 'white',
 backgroundImage:' repeating-linear-gradient(45deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 16px,transparent 16px, transparent 32px,rgba(0,0,0,0.08) 32px, rgba(0,0,0,0.08) 48px,rgba(0,0,0,0.14) 48px, rgba(0,0,0,0.14) 64px,rgba(0,0,0,0.05) 64px, rgba(0,0,0,0.05) 80px,transparent 80px, transparent 96px,rgba(0,0,0,0.21) 96px, rgba(0,0,0,0.21) 112px,rgba(0,0,0,0.18) 112px, rgba(0,0,0,0.18) 128px,rgba(0,0,0,0.21) 128px, rgba(0,0,0,0.21) 144px,rgba(0,0,0,0.29) 144px, rgba(0,0,0,0.29) 160px,rgba(0,0,0,0.08) 160px, rgba(0,0,0,0.08) 176px,rgba(0,0,0,0.3) 176px, rgba(0,0,0,0.3) 192px,rgba(0,0,0,0.23) 192px, rgba(0,0,0,0.23) 208px),repeating-linear-gradient(135deg, transparent 0px, transparent 3px,rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px,rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 9px,rgba(0,0,0,0.09) 9px, rgba(0,0,0,0.09) 12px,rgba(0,0,0,0.08) 12px, rgba(0,0,0,0.08) 15px,rgba(0,0,0,0.1) 15px, rgba(0,0,0,0.1) 18px,rgba(0,0,0,0.1) 18px, rgba(0,0,0,0.1) 21px,rgba(0,0,0,0.04) 21px, rgba(0,0,0,0.04) 24px,transparent 24px, transparent 27px,rgba(0,0,0,0.03) 27px, rgba(0,0,0,0.03) 30px,rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 33px,rgba(0,0,0,0.01) 33px, rgba(0,0,0,0.01) 36px,rgba(0,0,0,0.1) 36px, rgba(0,0,0,0.1) 39px,rgba(0,0,0,0.06) 39px, rgba(0,0,0,0.06) 42px,transparent 42px, transparent 45px,rgba(0,0,0,0.03) 45px, rgba(0,0,0,0.03) 48px,rgba(0,0,0,0.05) 48px, rgba(0,0,0,0.05) 51px,rgba(0,0,0,0.03) 51px, rgba(0,0,0,0.03) 54px),repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 14px,transparent 14px, transparent 28px,rgba(0,0,0,0.3) 28px, rgba(0,0,0,0.3) 42px,rgba(0,0,0,0.25) 42px, rgba(0,0,0,0.25) 56px,rgba(0,0,0,0.07) 56px, rgba(0,0,0,0.07) 70px,rgba(0,0,0,0.23) 70px, rgba(0,0,0,0.23) 84px,rgba(0,0,0,0.02) 84px, rgba(0,0,0,0.02) 98px,rgba(0,0,0,0.04) 98px, rgba(0,0,0,0.04) 112px,rgba(0,0,0,0.07) 112px, rgba(0,0,0,0.07) 126px,rgba(0,0,0,0.21) 126px, rgba(0,0,0,0.21) 140px,rgba(0,0,0,0.15) 140px, rgba(0,0,0,0.15) 154px,transparent 154px, transparent 168px,rgba(0,0,0,0.12) 168px, rgba(0,0,0,0.12) 182px,rgba(0,0,0,0.13) 182px, rgba(0,0,0,0.13) 196px,rgba(0,0,0,0.27) 196px, rgba(0,0,0,0.27) 210px),repeating-linear-gradient(0deg, rgba(0,0,0,0.17) 0px, rgba(0,0,0,0.17) 14px,rgba(0,0,0,0.26) 14px, rgba(0,0,0,0.26) 28px,rgba(0,0,0,0.06) 28px, rgba(0,0,0,0.06) 42px,rgba(0,0,0,0.14) 42px, rgba(0,0,0,0.14) 56px,transparent 56px, transparent 70px,rgba(0,0,0,0.22) 70px, rgba(0,0,0,0.22) 84px,rgba(0,0,0,0.1) 84px, rgba(0,0,0,0.1) 98px,transparent 98px, transparent 112px,rgba(0,0,0,0.15) 112px, rgba(0,0,0,0.15) 126px,transparent 126px, transparent 140px,rgba(0,0,0,0.03) 140px, rgba(0,0,0,0.03) 154px,rgba(0,0,0,0.03) 154px, rgba(0,0,0,0.03) 168px,rgba(0,0,0,0.06) 168px, rgba(0,0,0,0.06) 182px,rgba(0,0,0,0.17) 182px, rgba(0,0,0,0.17) 196px,rgba(0,0,0,0.2) 196px, rgba(0,0,0,0.2) 210px),linear-gradient(135deg, rgb(252, 16, 76),rgb(244, 3, 176))'
};

function LoginDialog() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const a = JSON.stringify(res.credential);
    const b = jwtDecode(a);
    setAccount(b);
   await addUser(b);
    
    
    console.log(res);
  };

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };

  const Google = styled(Box)`

  border-radius:50px;
  background-color:black;
  color:white;`

  
 const Login = styled(Typography)`
 font-size:30px;
 margin-left:130px;
 margin-top:60px;
 margin-bottom:-40px;
 `

  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialog }}>
        <Component>
          <Container>
            <Title1>WE CREATE <br /> <Head autoPlay loop src={"https://cdn.pixabay.com/video/2022/04/25/115035-703067756_large.mp4"} alt="QR Code" />MOMENTS <br /> CHATLY </Title1>
            <Typography>
            Stay connected, one witty conversation at a time. Where words spark laughter and friendships blossom. <br /> Chat away, because life's too short for dull moments.
            </Typography>
           
            
          </Container>
          <Box style={{ position: 'relative' }}>
          <Login>Login Using Google</Login>
            <QRCode src={"https://plus.unsplash.com/premium_photo-1684979565865-3539a542296e?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="QR Code" />
            <Google style={{ position: 'absolute', top: '85%', transform: 'translateX(60%)' }}>
              <GoogleLogin
              buttonText="Login with Google"
                onSuccess={onLoginSuccess}
                onError={onLoginError}
              />
            </Google>
          </Box>
        </Component>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
