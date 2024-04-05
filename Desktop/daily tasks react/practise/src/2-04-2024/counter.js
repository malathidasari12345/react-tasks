// counter using class based component
import { Component } from "react";


class CounterExample extends Component {
   state = {
    count : 0
   }
   incCount = (event)=>{
    this.setState(
        {
            
            count : this.state.count+event
        }
    )
   }
//    for decrement
decount = ()=>{
    if(this.state.count >=1){
        this.setState(
            {
                count : this.state.count-1
            }
        )
       }
    }
   
   reset = ()=>{
    this.setState(
        {
            count : 0
        }
    )
   }
    render(){
    return(
        <>
        <center><h2>Counter Example</h2></center>
        <h4>Count :{this.state.count}</h4>
       
        <button onClick ={()=>this.incCount(1)}>incCount</button>
        {/* to pass arguments */}
        <button onClick ={()=>this.incCount(10)}>incCountby10</button>

        <button onClick ={this.decount}>DecCount</button>
        <button onClick ={this. reset}>RESET</button>
        </>
    )
   }
}



export default CounterExample;