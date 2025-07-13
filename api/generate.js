export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userInput } = req.body;
      if (!userInput) {
        return res.status(400).json({ message: 'No input provided' });
      }

      const fakePrompt = `Here's a viral prompt for "${userInput}" → Go make the internet explode! 💥🚀`;

      return res.status(200).json({ prompt: fakePrompt });
    } catch (error) {
      console.error('❌ API Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}

