import React from 'react'
import {connect} from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {
    // console.log('wheel State:', state.number)
    const {number, moveClockwise, moveCounterClockwise} = props
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className=
          {number !== 0 ? 'cog' : 'cog active'} 
          style={{ "--i": 0 }}>
          {number !== 0 ? '' : 'B'}
        </div>

        <div className=
          {number !== 1 ? 'cog' : 'cog active'} 
          style={{ "--i": 1 }}>
          {number !== 1 ? '' : 'B'}  
        </div>

        <div className=
          {number !== 2 ? 'cog' : 'cog active'} 
          style={{ "--i": 2 }}>
          {number !== 2 ? '' : 'B'}
        </div>

        <div className=
          {number !== 3 ? 'cog' : 'cog active'} 
          style={{ "--i": 3 }}>
          {number !== 3 ? '' : 'B'}
        </div>

        <div className=
          {number !== 4 ? 'cog' : 'cog active'} 
          style={{ "--i": 4 }}>
          {number !== 4 ? '' : 'B'}
        </div>

        <div className=
          {number !== 5 ? 'cog' : 'cog active'}
          style={{ "--i": 5 }}>
          {number !== 5 ? '' : 'B'}
        </div>
        
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=>moveCounterClockwise()} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={()=>moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    number: state.wheel.number,
    // wheel: state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
