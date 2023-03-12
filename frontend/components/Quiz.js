import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { selectAnswer, fetchQuiz } from '../state/action-creators'

function Quiz(props) {
  // const [data, setData] = useState([])
  useEffect(()=> {
    fetchQuiz()
  },[])
// console.log(data.answers)
  const {selectAnswer, fetchQuiz, state} = props
  console.log(state)
//  const {answers, quiz_id, question} = data
  return (

    <div id="wrapper">
      
      {
        
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure</h2>
            {/* <h2 id={quiz_id}>{question}</h2> */}
            
            {/* {data.answers.map(answer => {
              return (
              <h1>{answer.text}</h1>
              )
            })}  */}
            
            <div id="quizAnswers">
              <div className="answer selected" onClick={()=>selectAnswer('A function')} >
                A function
                <button onClick={()=>selectAnswer('A function')}>
                  SELECTED
                </button>
              </div>

              <div className="answer" onClick={()=>selectAnswer('An elephant')}>
                An elephant
                <button onClick={()=>selectAnswer('An elephant')}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
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
    console.log(state.quiz)
    return{
      state: state.quiz,
    }
}

export default connect(mapStateToProps, {selectAnswer, fetchQuiz})(Quiz);