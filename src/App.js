import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import{ BrowserRouter, Route, Routes }from "react-router-dom";



export default function App() {
  const [mode, setMode] = useState({bg: "light", text: "dark"})
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType)=>{
    setAlert({
      msg: message,
      type: alertType
    })

    setTimeout(()=>{
      setAlert(null)
    }, 2500)
  }

  const toggleMode = ()=>{
    if(mode.bg === "light"){
      setMode({
        bg: "dark",
        text: "white"
      })
      showAlert("Dark Mode Enabled", "Success")
      document.body.style.backgroundColor = "#292D32"
    }
    else{
      setMode({
        bg: "light",
        text: "dark"
      })
      showAlert("Light Mode Enabled", "Success")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <React.Fragment>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<TextForm heading="Enter Text To Modify" mode={mode} sendMessage={showAlert} />} />
      <Route exact path="/About" element={<About mode={mode} aboutText="About" />} />
    </Routes>
    </div>

    </BrowserRouter>
    </React.Fragment>
  )
}

/*

*/