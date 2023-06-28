import Link from "next/link";

const Header = () => {
    return (
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            {/* <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li> */}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;