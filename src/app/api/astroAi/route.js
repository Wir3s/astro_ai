// pages/api/queryOpenAI.js
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { Configuration, OpenAIApi } from "openai";

const prisma = PrismaClient();

export default async function handler(req, res) {
  if (session) {
    try {
      // Find available credit for the user
      const availableCredit = await prisma.credit.findFirst({
        where: {
          userId: session.user.id,
          used: false,
        },
      });
      if (!availableCredit) {
        return res.status(403).json({ error: "No available credits" });
      }

      // Proceed with OpenAI API call
      const openai = new OpenAIApi(
        new Configuration({
          apiKey: process.env.OPENAI_API_KEY,
        })
      );

      const { prompt } = req.body;
      const completion = await openai.createCompletion({
        model: "text-davinci-003", // Specify the model
        prompt, // Use the prompt from the request
        max_tokens: 150, // Adjust as needed
        temperature: 0.7, // Adjust for creativity
      });

      // Mark the credit as used
      await prisma.credit.update({
        where: { id: availableCredit.id },
        data: { used: true },
      });

      // Send the response back to the client
      res.status(200).json({ response: completion.data.choices[0].text });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ error: "An error occurred while processing your request" });
    }
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
}
