import axios from "axios"
import { useState ,useEffect} from "react"
import ContactBox from "./ContactBox"

const Contact=()=>{
    useEffect(async ()=>{
        
        try{
            let result=await axios.get("http://localhost:4500/contacts")
            console.log(result)
            setContacts(result.data)
           }
       catch(e){

       }
    },[])
    const [contacts,setContacts]=useState([])
    return(
    <div>
        {
            contacts.map(x=><ContactBox key={x.title} contact={x}></ContactBox>)
        }
     </div>
    )
}

export default Contact