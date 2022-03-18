import { useContext, useState } from 'react'
import {Context} from '../Context/context'
import DetailsAgain from './DetailsMore'


const Details=()=>{
   const  {message,setMessage}=useContext(Context)
   const [data,setData]=useState(message)
 
   function changeMessage(){
       setData(setMessage())
   }

   return(
        <div className="card">
            <h1>About Details - But we show message</h1>
            <p>
               {data}
            </p>
            <br/><br/>
            <button className="btn btn-primary" 
            style={{width: "200px"}} onClick={changeMessage} >Get New Message</button>
            <hr/>
            <h3>Details Again Component</h3>
            <DetailsAgain></DetailsAgain>
        </div>
    )
}

export default Details;