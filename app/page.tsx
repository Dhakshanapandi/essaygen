"use client";

import { useState, useEffect } from "react";
import { Copy, Download, RefreshCcw } from "lucide-react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [wordCount, setWordCount] = useState(300);
  const [loading, setLoading] = useState(false);
  const [essay, setEssay] = useState("");
  const [error, setError] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [copied, setCopied] = useState(false);

  // Typing effect
  useEffect(() => {
    if (!essay) return;
    setDisplayText("");
    let i = 0;
    const words = essay.split(" ");
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + (i > 0 ? " " : "") + words[i]);
      i++;
      if (i >= words.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [essay]);

  const generateEssay = async () => {
    setLoading(true);
    setError("");
    setEssay("");
    setDisplayText("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, wordCount }),
      });
      const data = await res.json();
      if (res.ok) setEssay(data.essay);
      else setError(data.error || "Something went wrong.");
    } catch {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyEssay = () => {
    navigator.clipboard.writeText(essay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadEssay = () => {
    const blob = new Blob([essay], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "assignment.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-emerald-500 to-teal-400 text-white">
        <h1 className="text-4xl font-bold mb-4">AI Assignment Generator</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Generate high-quality, plagiarism-free essays in seconds.  
          Enter your topic and let AI do the hard work for you.
        </p>
      </section>

      {/* Ad Banner Placeholder
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-md p-4 text-center text-gray-500 text-sm">
          🔖 Ad Banner Placeholder (728x90)
        </div>
      </div> */}

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 sm:p-6">
        {/* Input card */}
        <div className="card p-6 lg:col-span-1 bg-white shadow rounded-lg">
          <h2 className="text-base font-medium mb-4">Enter Details</h2>

          <input
            type="text"
            placeholder="e.g. Climate change and agriculture"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border p-3 w-full mb-3 rounded-md text-gray-900 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />

          <select
            value={wordCount}
            onChange={(e) => setWordCount(Number(e.target.value))}
            className="border p-3 w-full mb-3 rounded-md text-gray-900 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300"
          >
            <option value={200}>200 words</option>
            <option value={300}>300 words</option>
            <option value={500}>500 words</option>
          </select>

          <button
            onClick={generateEssay}
            disabled={loading || !topic}
            className="w-full bg-[var(--accent)] text-white py-2.5 rounded-md font-medium hover:bg-[var(--accent-hover)] disabled:opacity-50"
          >
            {loading ? "Generating…" : "Generate Essay"}
          </button>

          {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
        </div>

        {/* Output card */}
        <div className="card flex flex-col lg:col-span-2 bg-white shadow rounded-lg">
          {/* Toolbar */}
          <div className="flex justify-end space-x-2 border-b p-2.5 bg-gray-100 rounded-t-lg">
            <button
              onClick={copyEssay}
              disabled={!essay}
              className={`p-2 rounded hover:bg-gray-200 ${
                !essay ? "text-gray-300 cursor-not-allowed" : "text-gray-600"
              }`}
              title="Copy"
            >
              <Copy size={16} />
            </button>

            <button
              onClick={downloadEssay}
              disabled={!essay}
              className={`p-2 rounded hover:bg-gray-200 ${
                !essay ? "text-gray-300 cursor-not-allowed" : "text-gray-600"
              }`}
              title="Download"
            >
              <Download size={16} />
            </button>

            <button
              onClick={generateEssay}
              disabled={!topic}
              className="p-2 rounded text-gray-600 hover:bg-gray-200"
              title="Regenerate"
            >
              <RefreshCcw size={16} />
            </button>
          </div>

          {/* Essay */}
          <div className="flex-grow p-6 bg-gray-50 rounded-b-lg">
            {loading ? (
              <p className="text-gray-500 italic">✍️ Writing your essay…</p>
            ) : displayText ? (
              <div className="essay-text">
                <h2 className="text-xl font-semibold mb-4 text-[var(--accent)]">
                  Generated Essay
                </h2>

                {/* Format Introduction, Body, Conclusion */}
                <div className="space-y-4 typing-caret">
                  {displayText
                    .split(/(\*\*[A-Za-z ]+\*\*)/)
                    .map((part, idx) => {
                      if (!part.trim()) return null;

                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <h3
                            key={idx}
                            className="text-lg font-semibold text-gray-800 mt-6"
                          >
                            {part.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }

                      return (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                          {part}
                        </p>
                      );
                    })}
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-center mt-20">
                Your essay will appear here…
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
