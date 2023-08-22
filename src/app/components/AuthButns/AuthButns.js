"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Log In</button>;
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};