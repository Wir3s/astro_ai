
import Link from "next/link";
import styles from "../page.module.css";
import { useSession } from "next-auth/react";
import GoogButn from "./GoogButn";

const Header = () => {
  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <GoogButn />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
