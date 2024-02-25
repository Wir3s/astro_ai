// components/PromptForm.js
"use client";

import styles from "../../page.module.css";
import { useState } from "react";
// import styles from "./PromptForm.module.css";

export default function PromptForm() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/queryOpenAI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("OpenAI Response:", data);
      // Handle successful response
    } else {
      console.error("Error fetching OpenAI response:", data);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className={styles.textarea}
        placeholder="Enter your prompt"
      />
      <button type="submit" className={styles.button}>
        Submit to OpenAI
      </button>
    </form>
  );
}
