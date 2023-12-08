import { MdEmail } from 'react-icons/md';
import axios from '../utils/axiosCustomize';

const postUserLogin = async(email, password) => {
    return await axios.post('api/v1/login', {email, password});
}

const postUserRegister = async(email, username, password) => {
    return await axios.post('api/v1/register', {email, username, password})
}

export {postUserLogin, postUserRegister}

