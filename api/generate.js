import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userInput } = req.body;
      if (!userInput) {
        return res.status(400).json({ message: 'No input provided' });
      }

      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userInput }],
      });

      const aiResponse = completion.data.choices[0].message.content;

      return res.status(200).json({ prompt: aiResponse });
    } catch (error) {
  console.error('❌ API Error:', error.response ? error.response.data : error.message);
  return res.status(500).json({ message: 'Internal Server Error', detail: error.message });
}

  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
