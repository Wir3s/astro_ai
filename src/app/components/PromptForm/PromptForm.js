// components/PromptForm.js
"use client";

import styles from "../../page.module.css";
import { useState } from "react";
// import styles from "./PromptForm.module.css";

export default function PromptForm({ sign }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name, // Should this be name:name,?
      sign,
    };
    const response = await fetch("/api/astroAi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload }),
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.textarea}
        placeholder="Enter your name"
        maxLength="40"
      />{" "}
      <br />
      <button type="submit" className={styles.signupButton}>
        Generate Your Horoscope
      </button>
    </form>
  );
}
