"use client";

import { signIn } from "next-auth/react";

const GoogButn = () => {
  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
};

export default GoogButn;
