
import { Component } from "react";

class AddFruit extends Component{

    state = {
        fruits : ["apple","banana","kiwi","orange"]
    };

// setstate for addfruit
addfruit = (value)=>{

    this.setState(
        {
          fruits : this.state.fruits+value
    
        }
    )
}

// setstate for delete fruit
delfruit = ()=>{
    this.setState(
        {
          fruits :  this.state.fruits.slice(0,-1)
        }
    )
}
render(){
    return(
        <>
        <center>
         <button onClick={()=>this.addfruit("Grapes","mango")}>AddFruit</button>
         <button onClick={this.delfruit}>DeleteFruit</button>
         </center>
         <ul>
          {this.state.fruits.map((fruit) => (
            <li>{fruit}</li>
          ))}
        </ul>
        </>

        
    )
}
}
export default AddFruit;