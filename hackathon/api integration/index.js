const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define an endpoint to handle user input and generate model responses
app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message; // Assuming the user message is sent in the request body
    const response = await generateModelResponse(userMessage);
    res.json({ message: response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to generate model response using ChatGPT
async function generateModelResponse(userMessage) {
  // Make a POST request to the ChatGPT API endpoint
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: userMessage,
    max_tokens: 50, // Adjust the number of tokens for the desired response length
    temperature: 0.7 // Adjust the temperature for controlling response randomness (between 0.0 and 1.0)
  }, {
    headers: {
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY', // Replace with your OpenAI API key
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text.trim();
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
