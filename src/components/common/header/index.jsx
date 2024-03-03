<<<<<<< HEAD
import React from 'react'
import Menubar from './menubar'
import Spacer from '../spacer'
import PropertiesSection from '@/components/home/properties'

=======
import Image from "next/image";
import "./Header.scss";
import Link from "next/link";
// import Arrow from "../../../assets/icons/arrow.svg";
>>>>>>> main

export default function Header() {
  return (
<<<<<<< HEAD
    <>
    
      <Menubar/>
      <Spacer/>
      
      <Spacer/>
      <PropertiesSection/>
      
    </>
  )
=======
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
            Add Property
            <i className="bi bi-arrow-right"></i>
            <img src={Arrow} alt="arrow" />
          </Link>
        </button>
      </div>
    </header>
  );
>>>>>>> main
}
