import React from "react";

class DisplayInfo extends React.Component{
    render(){
        const {listUsers} = this.props;
        return (
            <div>{
                listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <h3>My name is {user.name}</h3>
                            <h3>My age is {user.age}</h3>
                            <h3>My address is {user.address}</h3>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfo;