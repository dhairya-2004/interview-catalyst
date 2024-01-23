import axios from 'axios';
import React, { useState } from 'react';

const CustomModal = ({ closeModal,username }) => {

    const [questions, setQuestions] = useState({
        // username:'',
        question: '',
        answer: ''
    });


    const getquestion = (e) => {

        const { name, value } = e.target;
        setQuestions((prevData) => ({
            ...prevData,
            [name]: value

        }))
    }

    console.log(questions)



    const callCloseModal = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/question', {questions,username})

            console.log(response.data);


        }
        catch (error) {
            console.log(error)
        }

        setQuestions({
            question: '',
            answer: ''
        })

        closeModal();
    }

    return( 
        <>
            <div className="modal-wrapper" onClick={closeModal}> </div>

            <div className="modal-container">
                <div>{username}</div>
                <div className='title-write'>
                    <label >Create Post</label>
                </div>
                <div className='inputfield'>
                    <textarea
                        type="text"
                        rows="3"
                        name='question'
                        value={questions.question}
                        onChange={getquestion}
                        placeholder="What's on your mind?"
                        className='question-write'
                        required />
                    <textarea
                        type="text"
                        rows="9"
                        name='answer'
                        value={questions.answer}
                        onChange={getquestion}
                        placeholder="Compose your answer here..."
                        className='answer-write' />
                </div>
                <div className='two-buttons'>

                    <button onClick={closeModal} className="btn-write-in-cancel">
                        Cancel
                    </button>

                    <button onClick={callCloseModal} className="btn-write-in">
                        Send
                    </button>
                </div>
            </div>

        </>
       
    );
};

export default CustomModal;
