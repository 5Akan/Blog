import React, {useState} from "react";
import { Link } from "react-router-dom";
function Home(props) {

const articles = props.articles;

const articleList = articles.map(article=>
    <li key = {article.id}>
        <h2>
        <Link to={`/article/${article.id}`}>
        {article.title}
        </Link>       
        </h2>
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
            
            <span>Date</span>
        </div>
       )
           
}

export default Home;