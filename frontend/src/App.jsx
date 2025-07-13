import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input }),
      });

      const data = await res.json();
      setResponse(data.prompt);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Something went wrong!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🔥 PromptPlug</h1>
      <p>Your personal viral prompt engine</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px', padding: '10px' }}>
        Generate Viral Prompt
      </button>
      <div style={{ marginTop: '30px', fontWeight: 'bold' }}>
        {response}
      </div>
    </div>
  );
}

export default App;
