import Link from "next/link";
import styles from "../page.module.css";
import { getServerSession } from "next-auth";
import {
  LoginButton,
  LogoutButton,
} from "../components/AuthButns/AuthButns.js";
import Burgs from "../components/OpenMenu/OpenMenu"

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
          <Burgs />
        </ul>
      </nav>
    </header>
  );
}
