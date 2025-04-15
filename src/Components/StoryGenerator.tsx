"use client";

import { useState } from "react";
import { generateStory } from "../utils/generateStory";
import "../styles/storyGenerator.css";

export default function StoryGenerator() {
  const [story, setStory] = useState("");
  const [mode, setMode] = useState("story");

  const copyToClipboard = async () => {
    if (story) {
      try {
        await navigator.clipboard.writeText(story);
        alert("📋 Story copied to clipboard!");
      } catch (err) {
        alert("Failed to copy!");
        console.log(err);
      }
    }
  };
  
  const downloadAsFile = () => {
    if (story) {
      const blob = new Blob([story], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "random_story.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }

  return (
    <main className="page-container animate-fade-in">
      <section className="story-box glassmorphism">
        <h1 className="title text-white animate-slide-in">✨ Random Story Generator</h1>

        <p className="subtitle text-purple-100 mb-6">
          Generate whimsical stories crafted from your own word bank.
        </p>

        <div className="buttonClass">
          <label htmlFor="mode-select" className="text-purple-200 text-sm font-medium">
            Select Mode:
          </label>
          <select
            id="mode-select"
            className="mode-selector"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="story">🧙 Story</option>
            <option value="professional">👔 Professional</option>
            <option value="creative">🎨 Creative</option>
            <option value="horror">👻 Horror</option>
            <option value="coding">👨‍💻 Coding</option>
          </select>

          <button
            className="generate-button animate-pop-in mt-6"
            onClick={() => setStory(generateStory(mode))}
          >
            Generate a Story 🌟
          </button>
          <button onClick={copyToClipboard} className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition generate-button " >
    📋 Copy
  </button>
  <button onClick={downloadAsFile} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition generate-button ">
    ⬇️ Download
  </button>


        </div>

        {!!story && (
          <div className="story-output animate-slide-up">
            {story}
          </div>
        )}
      </section>
    </main>
  );
}
