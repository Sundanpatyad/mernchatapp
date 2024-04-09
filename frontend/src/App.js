import './App.css';
import Messenger from './Components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccounntProvider from './context/AccountProvieder';
function App() {
  const clientId='776784401557-8pnde37hvljt26ue11gtq06l0a03a4fd.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId} className="App">
     <AccounntProvider>
     <Messenger/>
     </AccounntProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
