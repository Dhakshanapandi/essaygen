import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { topic, wordCount } = await req.json();

    // Validate inputs
    if (!topic || !wordCount) {
      return NextResponse.json(
        { error: "Topic and word count are required." },
        { status: 400 }
      );
    }

    // Build prompt
    const prompt = `Write a ${wordCount}-word academic essay on "${topic}". 
    Structure it clearly with:
    - Introduction
    - Body
    - Conclusion`;

    // Groq API call
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      max_tokens: Math.min(wordCount * 5, 1500),
      temperature: 0.6,
    });

    // Debug log (optional, remove in production)
    console.log("Groq raw response:", JSON.stringify(response, null, 2));

    // Safely extract essay content
    const rawEssay =
      response?.choices?.[0]?.message?.content ??
      response?.choices?.[0]?.text ??
      "";

    const essay = rawEssay.trim();

    // If still empty, fallback
    if (!essay) {
      return NextResponse.json({
        essay:
          "⚠️ Sorry, no essay could be generated. Please try again with a different topic.",
      });
    }

    return NextResponse.json({ essay });
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: "Server busy. Please try again later." },
      { status: 500 }
    );
  }
}
