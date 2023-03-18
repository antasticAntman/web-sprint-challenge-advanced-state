import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange } from '../state/action-creators'
export function Form(props) {

const {form} = props
console.log(form)
  

const onChange = e => {
  props.inputChange(e)
  console.log(e.target.value)

  // inputChange(form.newTrueAnswer,setRightAnswer(e.target.value))
    
  // inputChange(form.newFalseAnswer,setWrongAnswer(e.target.value))
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
      <input name='newQuestion' maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question"  />
      <input name='newTrueAnswer' maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input name='newFalseAnswer' maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
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
