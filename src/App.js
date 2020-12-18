import './App.css';
import React, { useEffect } from 'react'
import example from "./utils/example"


function App() {
  // this just runs side effects or functions once the component mounts/loads for the first time
  useEffect(() => {

    example()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
