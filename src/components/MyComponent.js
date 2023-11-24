
import React from "react";


class MyComponent extends React.Component{
    
    state = {
      name: "Quan",
      address: "Hà Nội",
      age: 20
    }

    handleClick (){
      console.log(this.state);
      this.setState({name : "abc"})
    }

    handleOnmouseOver = (event)=>{
      console.log(event.pageX);
    }
    render(){
        return(
          <div>
            <h3>My name is {this.state.name}</h3>
            <button onClick={() => {this.handleClick()}}>click me!</button>
            <button onMouseOver={this.handleOnmouseOver}>hover me!!</button>
          </div>
            
        )
    };
}

export default MyComponent;