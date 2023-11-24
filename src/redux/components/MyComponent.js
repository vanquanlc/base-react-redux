
import React from "react";


class MyComponent extends React.Component{
    
  state = {
    name: "Quan",
    address: "Hà Nội",
    age: 20
  }
    render(){
        return(
            <h3>My name is {this.state.name}</h3>
        )
    };
}

export default MyComponent;