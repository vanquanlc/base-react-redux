import axios from '../utils/axiosCustomize'

const getListQuiz = async () => {
    return await axios.get('api/v1/quiz-by-participant');
}

export {getListQuiz}