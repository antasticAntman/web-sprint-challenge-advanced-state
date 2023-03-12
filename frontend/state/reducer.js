// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from './action-types'

const initialWheelState = {
 number: 0,
}
 function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      if(state.number === 5) {
        return {
          ...state,
          number:0
        }
      }
    console.log('MOVE_CLOCWISE:',state)
      return {
        ...state,
        number: state.number + 1,
      }
    case MOVE_COUNTERCLOCKWISE:
      if(state.number ===0){
        console.log('state',state.number)
        return {
          ...state,
          number: 5
        } 
      }
      return {
        ...state,
        number: state.number - 1,
      }
    default:
    return state
}
}


const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case(SET_QUIZ_INTO_STATE):
    return (
      state = action.payload
    )
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case(SET_SELECTED_ANSWER):
    return (
      action.payload
    )
    default:
      return state;
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
