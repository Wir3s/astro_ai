import Link from "next/link";
import styles from "../page.module.css";
import GoogButn from "./GoogButn";
import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route.js";
import {
  LoginButton,
  LogoutButton,
} from "../components/AuthButns/AuthButns.js";

export default async function Header() {
  const session = await getServerSession();
  console.log(session);
  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {session && <LogoutButton />} {!session && <LoginButton />}
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
