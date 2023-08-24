import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mainnav from './components/Mainnav';
import "jquery-ui-dist/jquery-ui";

import $ from 'jquery';
import Header from './components/Header';




function App() {
  return (
   <>
  <Header/>
 <Mainnav/>

   <Routes>
  <Route path="/" exact element={<Home/>} />
   
   </Routes>
   </>
  );
}

export default App;
