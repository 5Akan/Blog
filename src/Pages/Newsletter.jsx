import React, {useState} from "react";

function Newsletter() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

   function emailErrorCheck(email) {
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return  regex.test(email);
   }

 

   function handleSubmitEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail)
       
       if (emailErrorCheck(email)) {
          setError("Correct email")
       }else if(newEmail === ""){
          setError("");
       }else{
        setError("Invalid Email");
       }
   }

    return(
        <>
        <h1>The newsletter </h1>
        <form >
        <input type="text" value={email} onChange = {handleSubmitEmail}/>
        <button >Submit</button>
        {error && <p style={{color:error.includes("Invalid")?"red" : "green"}}>{error}</p>}
        </form>
       
        </>)
         
    
}

export default Newsletter;