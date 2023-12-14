import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalCreateQuiz from './ModalCreateQuiz';
import { FaCirclePlus } from "react-icons/fa6";
import './ManageQuiz.scss'
import ListQuizs from './ListQuiz';

const ManageQuizs = () => {
    const [showModalCreateQuiz, setShowModalCreateQuiz] = useState(false);
    const handleShow = () => setShowModalCreateQuiz(true);
    return (
        <div className='manage-quiz-container'>
        <Button 
            variant="primary" 
            onClick={handleShow}
            style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center'
            }}
        >
            <FaCirclePlus color='white'/>
            Create a new form
        </Button>
        <hr/>
        
        <ListQuizs/>

        <ModalCreateQuiz
            setShow={setShowModalCreateQuiz}
            show={showModalCreateQuiz}
        />
        </div>
    )
}
export default ManageQuizs;