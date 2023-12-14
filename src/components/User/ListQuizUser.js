import { useEffect, useState } from 'react';
import {store} from '../../redux/store'
import { getListQuiz } from '../../services/apiQuiz';
import ListQuizs from '../Admin/ManageQuizz/ListQuiz';
import './User.scss'
const ListQuizUser = () => {
    const [listQuizs, setListQuizs] = useState([]);
    useEffect(()=>{
        getDataListQuiz();
    }, []);
    const getDataListQuiz = async()=>{
        const res = await getListQuiz();
        setListQuizs(res.DT);
    }
    return(
        <div className="list-quiz-user-container">
        {listQuizs && listQuizs !== 0 ? 
            listQuizs.map((quiz, index) => {
                return(
                        <div key={`${index}-quiz`} className="card" 
                            style={{
                                width: "18rem",
                            }}
                        >
                            <img className="card-img-top" src={`data:image/jpeg;base64, ${quiz.image}`} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index}</h5>
                                <p className="card-text">{quiz.description}</p>
                            </div>
                        </div>
                )
            })
            :
            <span>you have not your quiz</span>
        }
        
        </div>

    )

}

export default ListQuizUser;