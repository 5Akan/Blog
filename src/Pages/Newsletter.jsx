import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Newsletter() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
//Function checks if email is in correct format
   function emailErrorCheck(email) {
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return  regex.test(email);
   }

//Function handles the different validation checks
     function handleSubmitEmail(e) {
         e.preventDefault();//prevent page reload
    
       if (emailErrorCheck(email)) {//if email is in correct format
        setError("Correct email");
        navigate('/success');
       }else if(email === ""){
          setError("Input Email");
       }else{
        setError("Invalid Email");
       }
   }

  

    return(
        <>
        <h1>The newsletter </h1>
        <form onSubmit={handleSubmitEmail}>
        <input type="text" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
        <button>Submit</button>
        {error && <p style={{color:(error.includes("Invalid") || error.includes("Input"))? "red" : "green"}}>{error}</p>}
        </form>
       
        </>)
         
    
}

export default Newsletter;