import React from "react";

class UserInfo extends React.Component{
    handleOnChange(value){
        this.setState({
          name: value
        })
      }
  
    render(){
        return (
            <form >
                <label>your name</label>
                <input type="text" onChange={(event)=> {this.handleOnChange(event.target.value)}}/>
                <br/><label>your age</label>
                <input type="text" onChange={(event)=> {this.handleOnChange(event.target.value)}}/>
                <br/><label>your address</label>
                <input type="text" onChange={(event)=> {this.handleOnChange(event.target.value)}}/>
                <br/><button type="submit">submit!</button>
            </form>

        )
    }
}

export default UserInfo;