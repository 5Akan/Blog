import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Newsletter from './Pages/Newsletter.jsx';
import Blog from './Pages/Blog.jsx';
import About from './Pages/About.jsx';
import AllBlogs from './Pages/AllBlogs.jsx';
import SuccessMessage from './Pages/SuccessMessage.jsx';
import React, {useState} from "react";

function App() {
  
  const [toggle,setToggle] = useState(false);

  const articles = [{
    id:1, 
    title:"Doing Something",
    content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv",
    date:"2nd February, 2025"
  },
  {
    id:2, title:"Doing Nothing", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv",
    date:"22nd June, 2024"
  },
  {
    id:3, title:"Doing Anything", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv",
    date:"5th July, 2022"
  },{
  id:4, 
  title:"Doing Something",
  content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv",
  date:"2nd February, 2025"
},
{
  id:5, title:"Doing Nothing", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv",
  date:"22nd June, 2024"
},
{
  id:6, title:"Doing Anything", content:";A;osiajnhgo[ajibaoijevojs[ojkodfnbjndlfbvanlkdbvnaohv",
  date:"5th July, 2022"
}]

  
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

    <div id="body" className ='body'>
    <Router>
      
      <nav className='navigation'>
        <ul className='navLink'>
          <li><Link to = "/" className ={({isActive}) => isActive ? "active" : ""}>Home</Link></li>
          <li><Link to = "/about" className ={({isActive})=>isActive?"active":""}>About</Link></li>
          <li><Link to = "/AllBlogs" className ={({isActive})=>isActive?"active":""}>Blog</Link></li>
          <li><Link to = "/newsletter" className ={({isActive})=>isActive?"active":""}>Newsletter</Link></li>

          {/* Handling underline of each nav */}

          <button id='theme-button' onClick={changeTheme}>
        { toggle ? 'Light':'Dark' }</button>
        </ul>
        
        
      </nav>

      <Routes>
        <Route path="/" element={<Home  articles = {articles}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/AllBlogs" element ={<AllBlogs articles = {articles}/>}/>
        <Route path="/article/:id" element={<Blog articles = {articles}/>} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path='/success' element={<SuccessMessage />}/>
      </Routes>
      
    </Router>
            
        </div>
   
    
    
  )
}

export default App
