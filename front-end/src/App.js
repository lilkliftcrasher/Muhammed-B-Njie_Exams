import React,{useEffect,useState} from "react";
import axios from "axios";
import Services from "./components/Services/Services";


const App = () => {

  const  [service, setService] = useState([])
  
  useEffect(()=>{ 
    axios.get('http://localhost:3001/services').then(response=>{

    setService(response.data);
    
    })
  
  },[])



 


  return(
    
   <div> 
     <Services services={service}/>
   </div>


 )
  }
export default App