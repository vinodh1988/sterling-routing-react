import axios from "axios"
import { useEffect, useState } from "react"
import FeedbackBox from "./FeedbackBox"
import FeedbackForm from "./FeedbackForm"

const About=()=>{
    useEffect(
        async ()=>{
        try{
          let result  = await axios.get("http://localhost:4500/feedbacks")
         
          setFeedbacks(result.data)
        }
        catch(e){
            setFeedbacks([])
        }
        },[]
    )

    const [feedbacks,setFeedbacks]=useState([])
    return(
        <div style={{overflow: "hidden",padding: "10px"}}>
           
           <h1>About us</h1>
           <div className="mt-5 p-15  text-white bg-dark rounded">
           <p>The About Us page of your website is an essential source of information for all who want to know more about your business.
           </p>
<p>About Us pages are where you showcase your history, what is unique about your work, your company’s values, and who you serve.
</p>
<p>
The design, written content, and visual or video elements together tell an important story about who you are and why you do it.
</p>         </div>

   <h3 style={{color: "darkblue ", marginTop:"25px"}}>Feedbacks</h3>
   {
       feedbacks.map((x)=><FeedbackBox key={x.id} feedback={x}></FeedbackBox>)
   }
   <FeedbackForm></FeedbackForm>
        </div>
    )
}

export default About