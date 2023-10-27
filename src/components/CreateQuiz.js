import React, { useState } from 'react';
import { addDoc, collection, where, query, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../authentication/firebase-config';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/CreateQuiz.css';
const CreateQuiz = () => {
    const [step, setStep] = useState(1);
    const [quizTitle, setQuizTitle] = useState('');
    const [quizDescription, setQuizDescription] = useState('');
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState('');
    const [docId, setDocId] = useState('');

    const infoRef = collection(db, `quiz/information/info`);


    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const submitDetails =  async () => {
        const idInfo = await addDoc(infoRef, {
            title: quizTitle, 
            description: quizDescription, 
            staff_Name: auth.currentUser.email, 
            staff_Id: auth.currentUser.uid 
      });
        setDocId(idInfo.id);  
        
          
      }

      const submitQuestion = async () => {
        const docRef = query(infoRef,where("staff_Id", "==", auth.currentUser.uid));
        const quesRef = collection(db, `quiz/information/info/${docId}/ques`);
        const {idQues} = await addDoc(quesRef, {
          question: questionText,
          option: options,
          correct: correctOption
        })
          
      }

    const addQuestion = () => {
        const newQuestion = {
        questionText,
        options,
        correctOption,
        };
        setQuestions([...questions, newQuestion]);
        setQuestionText('');
        setOptions(['', '', '', '']);
        setCorrectOption('');
        submitQuestion();
    };

    const handleSubmit = () => {
        // Send the form data to your backend or Firestore here
        console.log('Quiz data:', { quizTitle, quizDescription, questions });
    };
    
  return (
    <div className='createQuiz'>
        {step === 1 && (
        <div className="container">
          <h2 className='welcome'>Quiz Information</h2>
         

          <TextField id="outlined-basic" label="Quiz Title" variant="outlined" type='text' onChange={(e) => setQuizTitle(e.target.value)} className='user_Input'  />

          

          {/* <label htmlFor="quizDescription" className='descText'>Description</label> */}
          <textarea className='desc' id="quizDescription" placeholder='Desc' value={quizDescription} onChange={(e) => setQuizDescription(e.target.value)} />

          
         

        <button className="btn1" onClick={event => {
          nextStep();
          submitDetails();
        }} >
          <strong>Next</strong>
        </button>
        </div>
      )}

{step === 2 && (
        <div className="container">
          <h2 className='welcome'>Quiz Questions</h2>
          {questions.map((question, index) => (
            <div key={index}>
              <p className='detail'>Question {index + 1}: {question.questionText}</p>
              <p className='detail'>Options: {question.options.join(', ')}</p>
              <p className='detail'>Correct Option: {question.correctOption + 1}</p>
            </div>
          ))}
          <h3 className='text'>Add a Question</h3>
          

          <TextField id="outlined-basic" label="Question" variant="outlined" type='text'value={questionText} onChange={(e) => setQuestionText(e.target.value)} className='user_Input'  />
          
          {options.map((option, index) => (
            <div key={index}>
              

              <TextField id="outlined-basic" label="Option" variant="outlined" type='text'value={option} onChange={(e) => setOptions([...options.slice(0, index), e.target.value, ...options.slice(index + 1)])} />
            </div>
          ))}
          

          <TextField id="outlined-basic" label="Correct Option" variant="outlined" type='text'value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} className='user_Input'  />

          
          <button className="btn2" onClick={addQuestion} >
            <strong>Add Question</strong>
          </button>
          <Link to={'/admin'}>
          <button className="btn2"  >
            <strong>Admin Page</strong>
          </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CreateQuiz