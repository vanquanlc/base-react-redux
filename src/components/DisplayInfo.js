import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

// class DisplayInfo extends React.Component{
//     state = {
//         isShow: true
//     }
//     handleShowHideListUser(){
//         this.setState({
//             isShow: !this.state.isShow
//         })
//     }
//     render(){
//         const {listUsers} = this.props;
//         return (
//          <div className="display-infor-container">
//             <button 
//                 onClick={()=>{this.handleShowHideListUser()}}
//             >
//                 {this.state.isShow? 'hide': 'show'} list user
//             </button>
//             {this.state.isShow && 
//             <div>
//                 {listUsers.map((user) => {
//                     return (
//                         <div key={user.id} className={user.age > 20 ? 'green': 'red'}>
//                             <span>My name is {user.name}</span><br/>
//                             <span>My age is {user.age}</span><br/>
//                             <span>My address is {user.address}</span><br/>
//                             <button onClick={()=> this.props.handleDeleteUser(user.id)}>Delete</button><br/>
//                             <hr/>
//                         </div>
//                     )
//                 })}
//             </div>}
//          </div>
//         )
//     }
// }

const DisplayInfo = (props) =>{

    const [isShow, setIsShow] = useState(true);
    const handleShowHideListUser = () => {
        setIsShow(!isShow);
    }
    const {listUsers} = props;
    return (
        <div className="display-infor-container">
        <button 
            onClick={()=>handleShowHideListUser()}
        >
            {isShow? 'hide': 'show'} list user
        </button>
        {isShow && 
        <div>
            {listUsers.map((user) => {
                return (
                    <div key={user.id} className={user.age > 20 ? 'green': 'red'}>
                        <span>My name is {user.name}</span><br/>
                        <span>My age is {user.age}</span><br/>
                        <span>My address is {user.address}</span><br/>
                        <button onClick={()=> props.handleDeleteUser(user.id)}>Delete</button><br/>
                        <hr/>
                    </div>
                )
            })}
        </div>}
        </div>
    )
}
export default DisplayInfo;