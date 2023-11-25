
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";


class MyComponent extends React.Component{
    
    state ={
      listUsers:[
        {
          id: "ID001",
          name: "Quan",
          address: "Hà Nội",
          age: 20
        },
        {
          id: "ID002",
          name: "Quan2",
          address: "Hà Nội",
          age: 21
        },
        {
          id: "ID003",
          name: "Quan3",
          address: "Hà Nội",
          age: 22
        }
      ]
    } 

    handleAddUser = (userObj) => {
      this.setState({
        listUsers: [ userObj, ...this.state.listUsers]
      })
    }

    handleDeleteUser = (userID) =>{
      let listUsersClone = [...this.state.listUsers];
      listUsersClone = listUsersClone.filter(item => item.id != userID);
      this.setState({
        listUsers: listUsersClone
      })
    }
    render(){
        return(
          <div>
            
          <AddUserInfo 
            handleAddUser = {this.handleAddUser}
          />
          <DisplayInfo 
                listUsers={this.state.listUsers}
                handleDeleteUser={this.handleDeleteUser}
            />
          </div>
            
        )
    };
}

export default MyComponent;