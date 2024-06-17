import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')//for light or dark mode
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {//to update alert msgs from different pages
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#00152b'
      showAlert("Dark Mode Enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
          }/>
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
