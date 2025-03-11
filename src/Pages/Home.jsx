import React, {useState} from "react";
import { Link } from "react-router-dom";
function Home(props) {

const articles = props.articles;
const [articleCount, setArtilcleCount] = useState(4);//sets articleCount to 4


function handleToggleArticleLength() {
    //if number of articles is 4 then when button is pressed 
    //the function makes the whole article length(articles.length)
    // to be displayed 
    //when button is pressed and the full articles are being displayed 
    // then it reduces it back to 4 articles
    setArtilcleCount(articleCount === 4 ? articles.length : 4 )
}


const articleList = articles.slice(0 , articleCount).map(article=>
    //slice makes number of articles that have been mapped between
    // 0 to 4
    <li key = {article.id}>
        <h2>
        <Link to={`/article/${article.id}`}> 
        {/* '/article/1' if it is the first id*/}
                {article.title}
        </Link>       
        </h2>
        <p>{article.date}</p>
    </li>
    
)
    return(
        
        <div>
            <h1>Hi, I'm Akanimoh</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae quisquam, quos perspiciatis omnis eum autem quam assumend
            a vel saepe sint magnam itaque harum nemo sunt temporibus iure 
            voluptastempore? Impedit?</p>
            <h1>Latest Articles</h1>
            <ul>
                {articleList}
            </ul>
           <p onClick={handleToggleArticleLength}>
               {/* when clicked it fires the function that toggles between 
               full articles and 4 articles displayed */}
               {articleCount === 4? "View More Articles" : "View Less Articles"}
           </p>
        </div>
       )
           
}

export default Home;