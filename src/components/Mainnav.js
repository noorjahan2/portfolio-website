/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../css/nav.css"
import $ from 'jquery';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Navbar,
  Nav,
  Row,
  Col,

  Container,
  Button,
  CloseButton
} from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import {FaBars } from "react-icons/fa";
import {FaTimes } from "react-icons/fa";
import { BiCaretDown} from "react-icons/bi";
import { BiChevronRight} from "react-icons/bi";





  import { Link } from "react-router-dom";

const Mainnav = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  useEffect(()=>{
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");
    const menuBtn = document.querySelector(".menu-btn");
    const menuItems = document.querySelector(".menu-items");
    const expandBtn = document.querySelectorAll(".expand-btn");
    
    function toggle() {
    
      body.classList.toggle("overflow");
     
      overlay.classList.toggle("overlay--active");
     
      menuBtn.classList.toggle("open");
      menuItems.classList.toggle("open");
    }
    
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });
    
    window.onkeydown = function (event) {
      const key = event.key;
      const active = menuItems.classList.contains("open");
      if (key === "Escape" && active) {
        toggle();
      }
    };
    
    document.addEventListener("click", (e) => {
      let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = menuItems.classList.contains("open");
      if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
      }
    });
    
  
    expandBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("open");
      });
    });
    
  });
    

    




  return (
   <>
<header className="navbar sticky">
 
  <div className="menu-btn">
    <div className="menu-btn__lines"></div>
  </div>
  <ul className="menu-items">
    <li><Link href="#" className="menu-item first-item">HOME</Link></li>
   
    <li>
      <Link href="#" className="menu-item first-item expand-btn">ABOUT <BiCaretDown style={{marginTop:"2px",marginLeft:"1px"}}/></Link>
      <div className="mega-menu sample">
        <div className="content">
          <div className="col">
          <section>
              
              <ul className="mega-links">
                <li><Link href="#" className="menu-item ">STAFF</Link></li>
                <li><Link href="#" className="menu-item">REVIEW</Link></li>
              
              </ul>
            </section>
          </div>
          <div className="col">
            <section>
              
              <ul className="mega-links">
                <li><Link href="#" className="menu-item">LOCATION</Link></li>
                
              
              </ul>
            </section>
          </div>
      
        
        </div>
      </div>
    </li>

    <li>
      <Link href="#" className="menu-item first-item expand-btn">AREAS WE TRAET <BiCaretDown style={{marginTop:"2px",marginLeft:"1px"}}/></Link>
      <div className="mega-menu sample">
        <div className="content">
          <div className="col  ">
          <section>
              
              <ul className="mega-links">
                <li> <Link href="#" className="menu-item ">LOWER BACK</Link></li>
                <li><Link href="#" className="menu-item ">TMJ</Link></li>
                <li><Link href="#" className="menu-item ">KNEE</Link></li>
                <li><Link href="#" className="menu-item ">HIP/FOOT ANKLE</Link></li>
                <li><Link href="#" className="menu-item ">SPORTS INJURIES</Link></li>
                <li><Link href="#" className="menu-item ">POST sURGICAL SPINE</Link></li>
                <li><Link href="#" className="menu-item ">LOWER BACK & JOINT RECONSTRUCTION</Link></li>
                <li><Link href="#" className="menu-item ">AUTO ACCIDENT REHAB</Link></li>
              
              </ul>
            </section>
          </div>
          <div className="col">
            <section>
              
            <ul className="mega-links">
                <li><Link href="#" className="menu-item ">LOWER BACK</Link></li>
                <li><Link href="#" className="menu-item ">TMJ</Link></li>
                <li><Link href="#" className="menu-item ">KNEE</Link></li>
                <li><Link href="#" className="menu-item ">HIP/FOOT ANKLE</Link></li>
                <li><Link href="#" className="menu-item ">SPORTS INJURIES</Link></li>
                <li><Link href="#" className="menu-item ">POST sURGICAL SPINE</Link></li>
                <li><Link href="#" className="menu-item ">LOWER BACK & JOINT RECONSTRUCTION</Link></li>
                <li><Link href="#" className="menu-item ">AUTO ACCIDENT REHAB</Link></li>
              
              </ul>
            </section>
          </div>
      
        
        </div>
      </div>
    </li>

    <li>
      <Link href="#" class="menu-item first-item expand-btn">SERVICES <BiCaretDown style={{marginTop:"2px",marginLeft:"1px"}}/></Link>
      <div class="mega-menu sample">
        <div class="content">
          <div class="col  ">
          <section>
              
              <ul class="mega-links">
                <li><Link href="#" className="menu-item ">LOWER BACK</Link></li>
                <li><Link href="#" className="menu-item ">TMJ</Link></li>
                <li><Link href="#" className="menu-item ">KNEE</Link></li>
                <li><Link href="#" className="menu-item ">HIP/FOOT ANKLE</Link></li>
                <li><Link href="#" className="menu-item ">SPORTS INJURIES</Link></li>
                <li><Link href="#" className="menu-item ">POST sURGICAL SPINE</Link></li>
                <li><Link href="#" className="menu-item ">LOWER BACK & JOINT RECONSTRUCTION</Link></li>
                <li><Link href="#" className="menu-item ">AUTO ACCIDENT REHAB</Link></li>
              
              </ul>
            </section>
          </div>
          <div className="col">
            <section>
              
            <ul className="mega-links">
                <li><Link href="#" className="menu-item ">LOWER BACK</Link></li>
                <li><Link href="#" className="menu-item ">TMJ</Link></li>
                <li><Link href="#" className="menu-item ">KNEE</Link></li>
                <li><Link href="#" className="menu-item ">HIP/FOOT ANKLE</Link></li>
                <li><Link href="#" className="menu-item ">SPORTS INJURIES</Link></li>
                <li><Link href="#" className="menu-item ">POST sURGICAL SPINE</Link></li>
                <li><Link href="#" className="menu-item ">LOWER BACK & JOINT RECONSTRUCTION</Link></li>
                <li><Link href="#" className="menu-item ">AUTO ACCIDENT REHAB</Link></li>
              
              </ul>
            </section>
          </div>
      
        
        </div>
      </div>
    </li>
    <li>
      <Link href="#" className="menu-item first-item expand-btn">PATIENT CENTER <BiCaretDown style={{marginTop:"2px",marginLeft:"1px"}}/></Link>
      <div className="mega-menu sample">
        <div className="content">
          <div className="col  ">
          <section>
              
              <ul className="mega-links">
                <li><Link href="#" className="menu-item ">LOWER BACK</Link></li>
                <li><Link href="#" className="menu-item ">TMJ</Link></li>
                <li><Link href="#" className="menu-item ">KNEE</Link></li>
                <li><Link href="#" className="menu-item ">HIP/FOOT ANKLE</Link></li>
                <li><Link href="#" className="menu-item ">SPORTS INJURIES</Link></li>
                <li><Link href="#" className="menu-item ">POST sURGICAL SPINE</Link></li>
                <li><Link href="#" className="menu-item ">LOWER BACK & JOINT RECONSTRUCTION</Link></li>
                <li><Link href="#" className="menu-item ">AUTO ACCIDENT REHAB</Link></li>
              
              </ul>
            </section>
          </div>
          <div className="col">
            <section>
              
            <ul className="mega-links">
                <li><Link href="#" className="menu-item ">LOWER BACK</Link></li>
                <li><Link href="#" className="menu-item ">TMJ</Link></li>
                <li><Link href="#" className="menu-item ">KNEE</Link></li>
                <li><Link href="#" className="menu-item ">HIP/FOOT ANKLE</Link></li>
                <li><Link href="#" className="menu-item ">SPORTS INJURIES</Link></li>
                <li><Link href="#" className="menu-item ">POST sURGICAL SPINE</Link></li>
                <li><Link href="#" className="menu-item ">LOWER BACK & JOINT RECONSTRUCTION</Link></li>
                <li><Link href="#" className="menu-item ">AUTO ACCIDENT REHAB</Link></li>
              
              </ul>
            </section>
          </div>
      
        
        </div>
      </div>
    </li>

    
    <li><Link href="#" className="menu-item first-item">CONTACT US</Link></li>
  </ul>
  <div className="others-options"><Link href="" className="default-btn black-btn"style={{color:"#6d468a",fontWeight:"bold"}}>
          Book Appointment <BiChevronRight/>
                                </Link>
    </div>
</header>


<div className="overlay"></div>

    </>
  )
}

export default Mainnav
