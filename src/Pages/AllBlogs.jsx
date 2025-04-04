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
       {/* handling update in mongo database */}
       {/* after update delete ,exporting and importing as JSON file  */}
   {/* 51:54 */}
   {/* comparisons operators such as notEqualsTo, lessthan, greaterthan */}
   {/* Worked on logical operators $and, $nor, $or and $not */}
    {/* finished the alone part and about to start using it with node.js */}
    </>)
    
}

export default AllBlogs