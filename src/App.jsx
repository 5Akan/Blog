import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Newsletter from './Pages/Newsletter.jsx';
import Blog from './Pages/Blog.jsx';
import About from './Pages/About.jsx';
import AllBlogs from './Pages/AllBlogs.jsx';
import React, {useState} from "react";

function App() {
  
  const [toggle,setToggle] = useState(false);

  const articles = [{
    id:1, title:"Doing Something", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv"
  },
  {
    id:2, title:"Doing Nothing", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv"
  },
  {
    id:3, title:"Doing Anything", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv"
  },]

  
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
        <Link to = "/AllBlogs">Blog</Link>
        <Link to = "/newsletter">Newsletter</Link>
        
         <button id='theme-button' onClick={changeTheme}>
        { toggle ? 'Light':'Dark' }</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home  articles = {articles}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/AllBlogs" element ={<AllBlogs articles = {articles}/>}/>
        <Route path="/article/:id" element={<Blog articles = {articles}/>} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      
    </Router>
            
        </div>
   
    
    
  )
}

export default App
