import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Search(){
    const [query,setquery]=useState("")
    const navigate=useNavigate();
    
    function handlesubmit(e){
        e.preventDefault();
        if(!query) return
        navigate(`/order/${query}`);
        setquery("");
    }

    return (


     <form onSubmit={handlesubmit}>    
         <input value={query} 
         onChange={(e)=>setquery(e.target.value)}
         placeholder="Search order ?"/>

         </form>







    )
}
export default Search;