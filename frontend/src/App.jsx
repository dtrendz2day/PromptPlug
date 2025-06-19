import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePrompt = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + '/generate-prompt',
        { userInput }
      );
      setResult(response.data.prompt);
    } catch (error) {
      setResult('🔥 Error generating prompt. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header>
        <h1>🔥 PromptPlug</h1>
        <p>Your personal viral prompt engine</p>
      </header>
      <main>
        <textarea
          placeholder="Type your idea, question, or topic..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={generatePrompt} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Viral Prompt'}
        </button>
        <section className="output">
          <pre>{result}</pre>
        </section>
      </main>
      <footer>
        <small>🚀 Created for Visionaries | DTrendz AI Labs</small>
      </footer>
    </div>
  );
}

export default App;
