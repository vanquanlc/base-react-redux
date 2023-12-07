
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { MdChangeCircle } from "react-icons/md";
const ModalFormUpdateUser = ({email, userName, password, role, image, previewImage, ...rest }) => {

    const handleUploadedImg = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            const imageURL = URL.createObjectURL(event.target.files[0]);
            rest.setPreviewImage(imageURL)     
            rest.setImage(event.target.files[0]);
        }
    }

    return(
        <form>
        <div className="form-row">
            <div className="form-group ">
                <label >Email</label>
                <input 
                    onChange={(event) => rest.setEmail(event.target.value)}  
                    type="email" 
                    className="form-control" 
                    value={email} 
                    disabled
                    placeholder="Email" 

                />
            </div>
            <div className="form-group">
                <label >User name</label> 
                <input 
                    onChange={(event) => rest.setUserName(event.target.value)} 
                    type="text" 
                    value={userName}
                    className="form-control"  
                    placeholder="Your user name" 
                />
            </div>
            <div className="form-group">
                <label >Password</label>
                <input 
                    onChange={(event) => rest.setPassword(event.target.value)} 
                    type="password" 
                    className="form-control"  
                    placeholder="Password" 
                    disabled
                    autoComplete="on"
                />
            </div>
        </div>
        <div className="form-row " >
            <div className="form-group">
                <label >Role</label>
                <select 
                    onChange={(event) => rest.setRole(event.target.value)} 
                    id="inputState"
                    value={role}
                    className="form-control"
                >
                    <option  value="ADMIN">ADMIN</option>
                    <option  value="USER">USER</option>
                </select>
            </div>

            <div className="form-row ">
                {previewImage 
                ?
                <label className='label-upload-img' htmlFor='upload-img'>
                    <MdChangeCircle color="green"/>
                    <span> Changes image</span>
                </label>
                :
                <label className='label-upload-img' htmlFor='upload-img'>
                    <FaCirclePlus color='green'/>
                    <span> Upload image</span>
                </label>

                }
                <input 
                    onChange={(event) => handleUploadedImg(event)} 
                    type="file" id='upload-img' 
                    hidden 
                />
            </div>
            <div className='form-row preview-img'>
                {previewImage 
                ? 
                <img src={previewImage} alt='img preview'/> 
                : 
                <label>preview img</label>} 
            </div>
        </div>

    </form>
    )
}
export default ModalFormUpdateUser;