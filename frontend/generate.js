export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userInput } = req.body;

    // Fake response for testing (no OpenAI key needed yet!)
    const generatedPrompt = `🔥 Viral Prompt Generated for: "${userInput}"
    
1️⃣ ChatGPT Prompt: Rewrite this as a viral TikTok script.
2️⃣ Midjourney Prompt: Hyperrealistic, cinematic, trending style.
3️⃣ Product Idea: Sell a matching hoodie or mug.
4️⃣ Hashtags: #Viral #PromptPlug #AIHustle`;

    res.status(200).json({ prompt: generatedPrompt });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
