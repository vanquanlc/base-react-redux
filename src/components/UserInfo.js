import React from "react";

class UserInfo extends React.Component{
    handleOnChange(value){
        this.setState({
          name: value
        })
      }
  
    render(){
        return (
            <div>
                <label></label>
                <input type="text" onChange={(event)=> {this.handleOnChange(event.target.value)}}/>
            </div>

        )
    }
}

export default UserInfo;