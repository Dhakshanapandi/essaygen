import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { topic, wordCount } = await req.json();
 
    if (!topic || !wordCount) {
      return NextResponse.json(
        { error: "Topic and word count are required" },
        { status: 400 }
      );
    }

    const prompt = `Write a ${wordCount}-word academic essay on "${topic}" with Introduction, Body, and Conclusion.`;

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant", // Groq fast model
      messages: [{ role: "user", content: prompt }], 
      max_tokens: 800,
      temperature: 0.6,
    });

    const essay = response.choices[0]?.message?.content?.trim() || "No essay generated.";
    return NextResponse.json({ essay });
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: "Server busy. Please try again later." },
      { status: 500 }
    );
  }
}
