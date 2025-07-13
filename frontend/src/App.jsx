import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // STOP form from refreshing page!
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.prompt);
    } catch (error) {
      console.error('❌ Error:', error);
      setResponse('Something went wrong!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🔥 PromptPlug</h1>
      <p>Your personal viral prompt engine</p>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your viral idea..."
          style={{ width: '300px', padding: '10px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '10px' }}>
          Generate Viral Prompt
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>{response}</p>
    </div>
  );
}

export default App;

