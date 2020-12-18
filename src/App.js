import './App.css';
import React, { useEffect } from 'react'
import example from "./utils/example"
import getRandomVideoLink from "./utils/UrlGenerator"


function App() {
  // this just runs side effects or functions once the component mounts/loads for the first time
  useEffect(() => {

    example()
    getRandomVideoLink()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
