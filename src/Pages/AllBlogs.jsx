import { Link } from "react-router-dom";

function AllBlogs(props) {

    const articles = props.articles;
  
   const allBlogLists = articles.map(article =>
     <li key={article.id}>
        <Link to={`/article/${article.id}`}> 
            {/* '/article/1' if it is the first id*/}
            <span>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            </span>
        </Link>  
    </li>)
    return(
    <>
   
        <ul>
        {allBlogLists}
        </ul>
       
   
    </>)
}

export default AllBlogs