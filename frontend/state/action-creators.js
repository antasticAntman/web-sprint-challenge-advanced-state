import axios from 'axios'
import { connect } from 'react-redux'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { 
  return ({type:MOVE_CLOCKWISE})
}

export function moveCounterClockwise() {
  return ({type:MOVE_COUNTERCLOCKWISE})
 }

export function selectAnswer(answer) { 
  return ({type:SET_SELECTED_ANSWER, payload:answer})
}

export function setMessage(message) {
  return ({
    type:SET_INFO_MESSAGE,
    payload: message,
  })
 }

export function setQuiz(url) {
return ({type:SET_QUIZ_INTO_STATE, payload: url})
 }

export function inputChange(e) {
  return({
    type:INPUT_CHANGE, payload: {[e.target.name]: e.target.value}
    // {inputId: id, value: input}
  })
 }

export function resetForm() {
  return ({
    type:RESET_FORM,
  })
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null));
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data))
      // console.log('res', res.data)
    })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {
      'quiz_id': quiz_id,
      'answer_id': answer_id,
    })
    .then(res => {
      dispatch(selectAnswer(null))
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
    })
    .catch(err => console.error(err) )
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(newQ,trueA,falseA) {
  console.log('hiii')
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', {
      'question_text': newQ,
      'true_answer_text':trueA,
      'false_answer_text': falseA,
    })
    .then(res => {
      dispatch(setMessage(`Congrats: "${newQ}" is a great question!`))
      dispatch(resetForm())
    })
    .catch(err => console.error(err))
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
