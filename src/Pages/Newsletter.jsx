import React, {useState} from "react";

function Newsletter() {

    const [email, setEmail] = useState("");

    function displayEmail(e) {
        setEmail(e.target.value)
    }

    return(
        <>
        <h1>The newsletter </h1>
        <input type="text" value={email} onChange = {displayEmail}/>
        <button >Submit</button>
        <p>{email}</p>
        </>)
         
    
}

export default Newsletter;