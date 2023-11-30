
import './App.css';
import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';

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

  return (
    <div className="App">
      {message && <h1>{message}</h1>}
    </div>
  );
}

export default App;
