import './App.css'
import React, { useState } from 'react';

function Saudacao() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
      <h2 style={{ color: '#007bff' }}>Olá Mundo</h2>
      <p>Componente separado</p>
    </div>
  )
}

function Ronaldo({ronaldo}) {
  return (
    <div>

      <h1 style={{ fontSize: '40px', fontStyle: 'italic'}}>{ronaldo}</h1>

    </div>
  )
}

export function UnclickableButton() {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const dodgeMouse = () => {
    setPosition({
      top: Math.random() * 20 + 10, 
      left: Math.random() * 20 + 10,
    });
  };

  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <button
        onMouseEnter={dodgeMouse}
        style={{
          position: 'absolute',
          top: `${position.top}%`,
          left: `${position.left}%`,
          padding: '15px 30px',
          backgroundColor: '#ff4757',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '50px',
          cursor: 'not-allowed', 
          transition: 'all 0.2s ease-out', 
        }}
      >
        Click To Delete Database
      </button>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <p>Estou alterando meu primeiro componente.</p>

      <div style={{ padding: '20px' }}>
        <h1>Minha primeira aula</h1>

        <hr />

        <Saudacao />
        <Saudacao />
        <Saudacao />
        <Ronaldo ronaldo = "mamaco"/>
        <UnclickableButton/>

      </div>

    </div>
  )
}

export default App
