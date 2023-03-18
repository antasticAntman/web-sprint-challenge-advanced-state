import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange, postQuiz } from '../state/action-creators'
export function Form(props) {

const {postQuiz, form,newQ,trueA,falseA} = props
  
const onChange = e => {
  props.inputChange(e)


  }

  const onSubmit = e => {
    e.preventDefault()
    postQuiz(newQ,trueA,falseA);
  }



  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input name='newQuestion' value = {newQ} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question"  />
      <input name='newTrueAnswer' value={trueA} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input name='newFalseAnswer' value={falseA} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      
      {newQ !== '' && trueA !== '' && falseA !== '' && newQ != '   ' && trueA != '   ' && falseA != '   ' ?
      <button id="submitNewQuizBtn">Submit new quiz</button>
      :<button id="submitNewQuizBtn" disabled >Submit new quiz</button>}
      
      {/* <button id="submitNewQuizBtn" disabled >Submit new quiz</button> */}
    </form>
  )
}

const mapStateToProps = state => {
  return {
    form : state.form,
    newQ: state.form.newQuestion,
    trueA: state.form.newTrueAnswer,
    falseA: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, {inputChange, postQuiz})(Form)
