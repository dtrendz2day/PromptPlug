
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [prompt, setPrompt] = useState('');

  const generatePrompt = async () => {
    const res = await fetch('https://promptplug-backend.onrender.com/generate-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput: input })
    });
    const data = await res.json();
    setPrompt(data.prompt);
  };

  return (
    <div className="App">
      <h1>🔥 PromptPlug</h1>
      <p>Your personal viral prompt engine</p>
      <input
        type="text"
        placeholder="Type your idea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={generatePrompt}>Generate Viral Prompt</button>
      {prompt && (
        <div className="output">
          <h2>Generated Prompt:</h2>
          <pre>{prompt}</pre>
        </div>
      )}
      <footer>© PromptPlug by D Trendz • Powered by AI</footer>
    </div>
  );
}

export default App;
