
import './App.css';
import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import NumberGrabber from './NumberGrabber';



function App() {
  const [storedMessage, setStoredMessage] = useLocalStorage('message', "")
  const [message, setMessage] = useState("")
  //-- Component is loaded
  //-- gap of time
  //-- Component is rendered
  //-- gap of time
  //-- componentDidMount -> useEffect(() => {}, [])
  //-- gap of time
  //-- componentDidUpdate -> useEffect(() => {}, [message])


  useEffect(() => {
    setMessage(storedMessage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //-- Everytime state message changes, we will update storageMessage value
  useEffect(() => {
    setStoredMessage(message);

  }, [message])

  return (
    <div className="App">
      {message && <h1>{message}</h1>}
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to='/leagues/12345/team_1'>Page 1</NavLink>
          </li>
          <li>
            <NavLink to='/2/4/8'>Page 2</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/:banana/:id/:potato" element={<NumberGrabber/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
