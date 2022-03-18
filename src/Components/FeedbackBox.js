
const FeedbackBox=({feedback})=>{
    return(
<div className="media border p-3">
  <img src="http://localhost:8090/person.png" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
  <div className="media-body">
    <h4>{feedback.name} <small><i>on {feedback.type}</i></small></h4>
    <p>{feedback.message}</p>
  </div>
</div>
    )
}

export default FeedbackBox;