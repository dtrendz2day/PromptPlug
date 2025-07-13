export default function handler(req, res) {
  if (req.method === 'POST') {
    const { userInput } = req.body;
    const fakePrompt = `Here's a viral prompt for "${userInput}" → Go make the internet explode! 💥🚀`;
    res.status(200).json({ prompt: fakePrompt });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
