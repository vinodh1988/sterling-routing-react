import axios from "axios"
import { useState } from "react"

const FeedbackForm =()=>{

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [type,setType]=useState("")
    const [message,setMessage]=useState("")

    const saveFeedback=async ()=>{
    try{
         await   axios.post("http://localhost:4500/feedbacks",{
            id: Math.round(Math.random()*10000),
            name: name,
            email: email,
            type: type,
            message: message
        })
        alert("feedback Stored")
        setName("")
        setEmail("")
        setMessage("")
    }
    catch(e){
        alert("Unable to store feedback")
        
    }
    }

    return(
        <table className="table ">
            <tr> 
                  <th>Name</th>
                  <td><input type="text" value={name}
                  onChange={(e)=>{setName(e.target.value)} }/></td>
            </tr>
            <tr> 
                  <th>Email</th>
                  <td><input type="text"  value={email}
                   onChange={(e)=>{setEmail(e.target.value)}}/></td>
            </tr>
            <tr> 
                  <th>Type</th>
                  <td><select value={type}
                   onChange={(e)=>{setType(e.target.value)}}>
                      <option>Film & Webinar</option>
                      <option>Branding and Communication</option>
                      <option>Inbound & Content Marketing</option>
                      <option>Digital Marketing</option>
                      <option>ECommerce & Websites</option>
                      <option>Market Analysis</option>
                  </select></td>
            </tr>
            <tr> 
                  <th>Message</th>
                  <td><textarea style={{height: "100px", width: "250px"}} value={message}
                    onChange={(e)=>{setMessage(e.target.value)}}/></td>
            </tr>
            <tr>
                <td colspan="2" style={{textAlign:"center"}}>
                    <button type="button" style={{border:"none",
                    color: "white", backgroundColor:"darkred"}} onClick={saveFeedback}>
                        Send Feedback</button>
                </td>
            </tr>
            
        </table>
    )
}

export default FeedbackForm;