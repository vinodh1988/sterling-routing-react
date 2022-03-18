
import {Context} from '../Context/context'

const DetailsAgain=()=>{
   //const  con=useContext(Context)
 
   return(
<div className="card">
    <h3>Contextually consuming</h3>
 <Context.Consumer>
    {x=> <h5>{x.message}</h5>}
</Context.Consumer>
</div>
    )
}

export default DetailsAgain;