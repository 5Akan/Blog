import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Newsletter from './Pages/Newsletter.jsx';
import Blog from './Pages/Blog.jsx';
import About from './Pages/About.jsx';
import React, {useState} from "react";


function App() {
  
  const [toggle,setToggle] = useState(false);

  
  function changeTheme() {
    setToggle(!toggle);
    if(toggle){
      document.getElementById("body").style.backgroundColor = "white"
      document.getElementById("body").style.color = "black"
    }else{
      document.getElementById("body").style.backgroundColor = "black"
      document.getElementById("body").style.color = "white"
    }
  }
  return (

    <div id="body" >
    <Router>
      
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/blog">Blog</Link>
        <Link to = "/newsletter">Newsletter</Link>
        
         <button id='theme-button' onClick={changeTheme}>
        { toggle ? 'Light':'Dark' }</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      
    </Router>
            
        </div>
   
    
    
  )
}

export default App
