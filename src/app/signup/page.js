"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log("Response:", response);
    const text = await response.text();
    console.log("Response text:", text);

    if (response.ok) {
      // Handle successful registration, such as redirecting to login page
      redirect("/");
    } else {
      const errorData = JSON.parse(text);
      console.error("Registration error:", errorData);
      // Optionally display the error to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
        required
      />
      {/* <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        required
      /> */}
      <button type="submit">Register</button>
    </form>
  );
}
