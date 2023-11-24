import React from "react";

class DisplayInfo extends React.Component{
    state = {
        isShow: true
    }
    handleShowHideListUser(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render(){
        const {listUsers} = this.props;
        return (
         <div>
            <button 
                onClick={()=>{this.handleShowHideListUser()}}
            >
                {this.state.isShow? 'hide': 'show'} list user
            </button>
            {this.state.isShow && 
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id} className={user.age > 20 ? 'green': 'red'}>
                            <span>My name is {user.name}</span><br/>
                            <span>My age is {user.age}</span><br/>
                            <span>My address is {user.address}</span><br/>
                            <hr/>
                        </div>
                    )
                })}
            </div>}
            
         </div>
        )
    }
}
export default DisplayInfo;