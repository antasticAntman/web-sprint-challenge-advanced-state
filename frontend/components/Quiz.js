import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators'

function Quiz(props) {
  // const [data, setData] = useState([])
  useEffect(()=> {
    fetchQuiz()
  },[])
// console.log(data.answers)
  const {selectAnswer, fetchQuiz, quiz, select, postAnswer} = props
  console.log(select)
//  const {answers, quiz_id, question} = data
  return (

    <div id="wrapper">
      
      {
        
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz !== null ? (
          <>
            {/* <h2>What is a closure</h2> */}
            <h2 id={quiz.quiz_id}>{quiz.question}</h2>

            
            <div id="quizAnswers">
            {quiz.answers.map(answer => {
              return (
                <div key = {answer.answer_id} className={select !== answer.answer_id ? 'answer' : 'answer selected'} onClick={()=>selectAnswer(answer.answer_id)} >
                {answer.text}
                <button>
                  {select !== answer.answer_id ? 'Select': 'SELECTED'}
                </button>
              </div>
              )
            })} 
            </div>

            <button id="submitAnswerBtn" onClick={()=>postAnswer(quiz.quiz_id, select)}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
// const mapStateToProps = state => {
//   console.log(state.selectedAnswer)
//   return {
//     state: state.selectedAnswer
//   }
// }

const mapStateToProps = state => {
    console.log(state.selectedAnswer)
    return{
      quiz: state.quiz,
      select: state.selectedAnswer
    }
}

export default connect(mapStateToProps, {selectAnswer, fetchQuiz, postAnswer})(Quiz);