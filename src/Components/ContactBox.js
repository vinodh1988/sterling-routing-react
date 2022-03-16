const ContactBox=({contact})=>{
    
   let url="http://localhost:8090/"+contact.image;
    return(
      
        <div className="card" style={{width:"400px",float:"left",margin:"20px"}}>
        <img className="card-img-top" src={url} alt="Card image" style={{width:"100%"}}/>
        <div className="card-body">
          <h4 className="card-title">{contact.title}</h4>
          <p className="card-text">
              {contact.address}<br/>
              {contact.city}<br/>
              {contact.pin} 
          </p>
    
        </div>
      </div>
    
    )
}

export default ContactBox