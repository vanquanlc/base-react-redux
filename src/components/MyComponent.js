
import React from "react";
import UserInfo from "./UserInfo";
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
    render(){
        return(
          <div>
            
          <UserInfo></UserInfo>
          <DisplayInfo 
                listUsers={this.state.listUsers}
            />
          </div>
            
        )
    };
}

export default MyComponent;