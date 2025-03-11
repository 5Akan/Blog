
function AllBlogs(props) {

    const articles = props.articles;

   const allBlogLists = articles.map(article =>
        <li key={article.id}>
         <h2>{article.title}</h2>
        <p>{article.content}</p>
        </li>)
    return(
    <>
   
        <ul>
        {allBlogLists}
        </ul>
       
   
    </>)
}

export default AllBlogs