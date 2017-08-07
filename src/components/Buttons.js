import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button type="button"
                onClick={ this.props.onIncrement }>
          +
        </button>
        <button type="button"
                onClick={ this.props.onDecrement }>
          -
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);