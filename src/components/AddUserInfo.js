import React from "react";

class AddUserInfo extends React.Component{
    state = {
        name: '',
        age: null,
        address: ''
    }

    handleOnchangeName = (event)=> {
        this.setState({
            name: event.target.value
        })
    }
    handleOnchangeAge = (event)=> {
        this.setState({
            age: event.target.value
        })
    }
    handleOnchangeAddress = (event)=> {
        this.setState({
            address: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddUser({
            id: "ID" + Math.random()*100,
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        });
    }
  
    render(){
        return (
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                <label>your name</label>
                <input type="text" onChange={(event) => this.handleOnchangeName(event)}/>
                <br/><label>your age</label>
                <input type="number" onChange={(event) => this.handleOnchangeAge(event)}/>
                <br/><label>your address</label>
                <input type="text" onChange={(event) => this.handleOnchangeAddress(event)}/>
                <br/><button  type="submit">Add user info</button>
            </form>

        )
    }
}

export default AddUserInfo;