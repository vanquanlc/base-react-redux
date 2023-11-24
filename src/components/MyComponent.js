
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
            <DisplayInfo 
                listUsers={this.state.listUsers}
            />
            <form>
              <UserInfo 
                name={this.state.name}
              />
              <button type="submit">Submit!</button>
            </form>

          </div>
            
        )
    };
}

export default MyComponent;