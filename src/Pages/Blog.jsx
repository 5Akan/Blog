import { useParams } from "react-router-dom";

function Blog(props) {

    const articles = props.articles;
    const {id} = useParams();
    console.log(id)
    const selectArticle = articles.find((article)=> article.id === parseInt(id));
    return(
        <>
        <h1>Blog </h1>
        <h2>{selectArticle.title}</h2>
        <p>{selectArticle.content}</p>
        </>)
         
        //  this component should have all the articles and their info

        //take what you have done here and put in an 
        //articles page that gives info for each article
    
}

export default Blog;