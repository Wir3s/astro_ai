'use client'

import Link from "next/link";
import styles from "../page.module.css";
import { useSession, signIn, signOut } from 'next-auth/react';


const Header = () => {
  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          </li>
          {/* <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
