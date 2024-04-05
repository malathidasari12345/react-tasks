// state :used to handle data, it is an obj
// state creation in class based components
// 1.object
// 2.constructer
// set state is a method, which is used to change the state in class based components
// set state is used in only class based components
// state is asynchronous
// when we are using fuction in obj notation it is method
// whenever state change occurs component has to rerender to show updated ui
// we should use only  setstate to change state to update ui

import { Component } from "react";
import CounterExample from "./counter";

class ButtonComponent extends Component{
// by using obj based 
state =
{
    isSubscribe : false,
    text1:"subscribe",
    text2:"subscribed"
}
// setstate,userdefined method
changeSubscribe = ()=>{
    this.setState(
        {
            isSubscribe : !this.state.isSubscribe 
        }
    )

}
    render(){
        return (
            <div>
         <button style ={{
            backgroundColor:this.state. isSubscribe?"red":"green"
         }}  onClick = {this.changeSubscribe}>{this.state.isSubscribe ?this.state.text2:this.state.text1}</button>
         {
            this.state.isSubscribe
            ?
            <>
            <CounterExample/>
            <h6>Welcome user</h6>
            </>
            :
            <h6>Please subscribe</h6>
         }
            </div>
        )
    }

}

export default ButtonComponent;