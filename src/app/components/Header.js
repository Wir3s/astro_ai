"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "../page.module.css";
import {
  LoginButton,
  LogoutButton,
} from "../components/AuthButns/AuthButns.js";
import Burgs from "../components/OpenMenu/OpenMenu";

export default function Header() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          {!session && (
            <li>
              <Link href="/signup">Create Account</Link>
            </li>
          )}
          <li>{session ? <LogoutButton /> : <LoginButton />}</li>
          <Burgs />
        </ul>
      </nav>
    </header>
  );
}
