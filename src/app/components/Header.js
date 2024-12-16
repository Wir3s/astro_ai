"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "../page.module.css";
import {
  LoginButton,
  LogoutButton,
} from "../components/AuthButns/AuthButns.js";
import { Suspense } from "react";

function HeaderContent() {
  const { data: session } = useSession();

  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" prefetch>
              Home
            </Link>
          </li>
          {!session && (
            <li>
              <Link href="/signup" prefetch>
                Create Account
              </Link>
            </li>
          )}
          <li>{session ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </nav>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeaderContent />
    </Suspense>
  );
}
