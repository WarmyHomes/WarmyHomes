import Image from "next/image";
import "./Header.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header-main-container">
      <div className="header-left-container">
        <Link href={"/"}>
          <Image width={210} height={50} src={"/images/logo/logo.png"} />
        </Link>
        <nav className="header-nav">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Properties</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right-container">
        <div className="login-signup-buttons">
          <i className="bi bi-person"></i>
          <button>
            <Link href={"/"}>Login</Link>
          </button>
          <span>/</span>
          <button>
            <Link href={"/"}>Register</Link>
          </button>
        </div>
        <button className="add-property-button">
          <Link href={"/"}>
            Add Property <img width={35} height={35} src="/icons/arrow.svg" />
          </Link>
        </button>
      </div>
    </header>
  );
}
