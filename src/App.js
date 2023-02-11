import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Homepage from './pages/Homepage/Homepage';
import Lock from './pages/Homepage/Lock';

function App() {

  const [whatsAppLock,setWhatsAppLock] = useState(false)

    const lockHandler = () => {
        console.log("WhatsApp Locked")
        setWhatsAppLock(!whatsAppLock)

    }

    const [unLock,setUnLock] = useState(false)

    const unLockHandler = () => {
        console.log("unlock")
        setWhatsAppLock(!whatsAppLock)
    }

  return (
    <div className="App">
      <Homepage />

    </div>
  );
}

export default App;
