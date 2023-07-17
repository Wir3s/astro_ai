
import Link from "next/link";
import styles from "../page.module.css";
import { useSession } from "next-auth/react";
import GoogButn from "./GoogButn";

const Header = () => {
  return (
    <header className={styles.headerComponent}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <GoogButn />
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
