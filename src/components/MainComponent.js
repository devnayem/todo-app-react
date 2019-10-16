import React, { Component } from 'react'
import TodoList from './TodoList';
import TodoItems from './TodoItems';

export class MainComponent extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { 
        text:'',
        key:'' 
      },
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {
      text: itemText,
      key: Date.now()
    }

    this.setState ({
      currentItem
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem

    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]

      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  render() {
    return (
      <div className="container-fluid"> 
        <h1>TODO APP</h1>
        <hr></hr>
        <div class="row align-items-center">
          <div class="col-3">
        
          </div>
          <div class="col-6">
            <TodoList 
            addItem = { this.addItem } 
            inputElement={ this.inputElement }
            handleInput={ this.handleInput }
            currentItem={ this.state.currentItem }
            />
            <br></br>
            <TodoItems 
              entries = { this.state.items }
              deleteItem = { this.deleteItem }
            />
          </div>
          <div class="col-3">
 
          </div>
        </div>
      </div>
    )
  }
}
