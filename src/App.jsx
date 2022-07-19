import React, { useState } from 'react';
import './App.css';
import foto from "./assets/foto2.png"

function App() {
  const name = "Dudi Julianto";
  const asal = "Kota Banjar";
  const [title, setTitle] = useState("Welcome to My App");
  const changeTitle = () => {
    setTitle("Terima kasih sudah berkunjung")
  }

  

  return (
    <div className='App'>
      <h1>{ title }</h1>
      <img src = {foto} className="foto" />
      <h2>{name}</h2>
      <h3>{asal}</h3>
      <button onClick={changeTitle}>Coba klik disini</button>
    </div>

    
  );
}

export default App;
