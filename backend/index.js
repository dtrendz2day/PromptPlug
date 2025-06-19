const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE';

app.post('/generate-prompt', async (req, res) => {
  const { userInput } = req.body;

  const promptForGPT = `You're an elite AI prompt generator. A user typed: "\${userInput}". Give them:
  1. A perfect viral ChatGPT prompt
  2. A YouTube Shorts script idea
  3. A Midjourney image prompt
  4. A product tie-in prompt if applicable
  5. Viral hashtags (max 6)

  Respond in labeled sections.\`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: promptForGPT }],
        temperature: 0.85
      },
      {
        headers: {
          'Authorization': \`Bearer \${OPENAI_API_KEY}\`,
          'Content-Type': 'application/json'
        }
      }
    );

    const generatedPrompt = response.data.choices[0].message.content;
    res.json({ prompt: generatedPrompt });
  } catch (error) {
    console.error('Error generating prompt:', error);
    res.status(500).json({ error: 'Prompt generation failed.' });
  }
});

app.listen(port, () => {
  console.log(\`🚀 PromptPlug API running on http://localhost:\${port}\`);
});
