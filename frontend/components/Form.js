import React,{useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange } from '../state/action-creators'
export function Form(props) {

const {form} = props
console.log(form)
  
const [question, setQuestion] = useState('')
const [rightAnswer, setRightAnswer] = useState('')
const [wrongAnswer, setWrongAnswer] = useState('')

const onChange = e => {
  inputChange(form.newQuestion,setQuestion(e.target.value))
  console.log(e)

  inputChange(form.newTrueAnswer,setRightAnswer(e.target.value))
    
  inputChange(form.newFalseAnswer,setWrongAnswer(e.target.value))
  // if(form.newQuestion == e.target){
    // inputChange('newQuestion', e.target.value)
    // }
    // console.log(e.target)
    // inputChange(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value = {form.newQuestion = question} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question"  />
      <input value = {form.newTrueAnswer = rightAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value = {form.newFalseAnswer = wrongAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    form : state.form
  }
}

export default connect(mapStateToProps, {inputChange})(Form)
