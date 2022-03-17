const FeedbackForm =()=>{
    return(
        <table className="table ">
            <tr> 
                  <th>Name</th>
                  <td><input type="text" /></td>
            </tr>
            <tr> 
                  <th>Email</th>
                  <td><input type="text" /></td>
            </tr>
            <tr> 
                  <th>Type</th>
                  <td><select>
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
                  <td><textarea style={{height: "100px", width: "250px"}}/></td>
            </tr>
            <tr>
                <td colspan="2" style={{textAlign:"center"}}>
                    <button type="button" style={{border:"none",
                    color: "white", backgroundColor:"darkred"}}>
                        Send Feedback</button>
                </td>
            </tr>
            
        </table>
    )
}

export default FeedbackForm;