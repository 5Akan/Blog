import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Newsletter from './Pages/Newsletter.jsx';
import Blog from './Pages/Blog.jsx';
import About from './Pages/About.jsx';


function App() {


  return (
    <Router>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/blog">Blog</Link>
        <Link to = "/newsletter">Newsletter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
    
  )
}

export default App
