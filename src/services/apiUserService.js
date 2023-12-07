import axios from '../utils/axiosCustomize'


const setUserService = ( email, username, password, role, userImage) =>  {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('role', role);
    formData.append('userImage', userImage);

    return  axios.post("api/v1/participant", formData)
}
const getAllUserService = () => {
    return axios.get("api/v1/participant/all")

}

const getAllUserServiceWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)

}

const deleteServiceUser = (id) => {
    return axios.delete("api/v1/participant", { data: {
        id: id
    }})
}


const updateServiceUser = (id, username, role, userImage) => {
    const formData = new FormData();
    formData.append('id', id)
    formData.append('username', username);
    formData.append('role', role);
    formData.append('userImage', userImage);

    return  axios.put("api/v1/participant", formData)
}
export {setUserService, getAllUserService, deleteServiceUser, updateServiceUser, getAllUserServiceWithPaginate}