import React from "react";

import {Routes, Route} from 'react-router-dom'
import { Service } from "./components/Service/Service";
import Services from "./components/Services/Services";


const App = () => {

const service=[
  {
      id: 1,
      icon: "ICON",
      title: "Product Design",
      content:"Let me help you on the core task now, validate the design solution,collect your own data understand your users, and don't just copy your competit."
  },
  {
      id: 2,
      icon: "Front-end Engineering",
      title: "Teaching",
      content:"Let me help you on the core task now, validate the design solution,collect your own data understand your users, and don't just copy your competit."
  },
  {
      id: 3,
      icon: "ICON",
      title: "Teaching",
      content:"Let me help you on the core task now, validate the design solution,collect your own data understand your users, and don't just copy your competit."
  }
]



 


  return(
    
   <div> 
  
  
     <Routes>
        <Route path="/" element={<Services services={service}/>}/>
        <Route path="/service" element={<Service/>}/>
        
     </Routes>
     
   </div>


 )
  }
export default App