/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import "../css/header.css"
import img from "../images/complogo.png"
import { BiMobile} from "react-icons/bi";
import { FaMobileAlt} from "react-icons/fa";
import { FaPaypal} from "react-icons/fa";
import { BiLocationPlus} from "react-icons/bi";



import { Link } from 'react-router-dom';


const Header = () => {
  return (
  <>
 
<div class="header-section"> 
 
  <div class="header info-header clearfix">
    <div class="container">
      <div class="header-wrap clearfix">
        <div class="row">
          <div class="col-lg-3 text-center">
            <div id="logo" class="logo"> <a href="index.html" rel="home"> <img src={img} alt='' height={100}/> </a> </div>
         
            
          </div>
          <div class="col-lg-9 ">
            <div class="wrap-info-header clearfix">
           
              <aside class="educare-info educare-info-section">
                <div class="texteducare-info clearfix ms-5">
                  <div class="info-icon"> <BiLocationPlus style={{fontSize:"20px"}}/></div>
                  <div class="info-text">
                    <h6 class="mt-2">SERVICE LOCATION</h6>
                  <p>fggahhagutaha</p>
                  </div>
                </div>
              </aside>
              <aside class="educare-info educare-info-section">
                <div class="texteducare-info clearfix ms-5 ">
                  <div class="info-icon"> <FaPaypal style={{fontSize:"20px"}}/></div>
                  <div class="info-text">
                    <h6 class="mt-2">PAY YOUR BILLS</h6>
                    
                    <p><Link to="">Click Here</Link></p>
                  </div>
                </div>
              </aside>
              <aside class="educare-info educare-info-section">
                <div class="texteducare-info clearfix">
                  <div class="info-icon"><FaMobileAlt style={{fontSize:"20px"}}/></div>
                  <div class="info-text">
                    <h6 class="mt-2">CALL US</h6>
                    <p>91222222</p>
                   
                  </div>
                  
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    
      
    </div>
  </div>
  </div>
  
  
  </>
  )
}

export default Header
