// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { inputChange } from './action-creators'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from './action-types'

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
      return {
        ...state,
        number: state.number + 1,
      }
    case MOVE_COUNTERCLOCKWISE:
      if(state.number ===0){
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
  switch(action.type){
    case(SET_INFO_MESSAGE):
    return (
      action.payload
    ) 
    default:
      return state
  }
}
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case(INPUT_CHANGE):
      return(
        action.payload
      )
    case(RESET_FORM):
        return(
          state=initialFormState
        )
    default:
      return state
  }
}
export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
