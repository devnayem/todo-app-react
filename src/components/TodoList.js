import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="main container">

        <form onSubmit={ this.props.addItem }>
          <div className="form-group">
            <input 
              className="form-control"
              placeholder="Insert your task here"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />  
          </div>
          <button className="btn btn-primary btn-lg" type="submit"> Add Task </button>
        </form>
      </div>
    )
  }
}

export default TodoList