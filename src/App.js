import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Palette from './components/Palette';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends React.Component{
  id = 3;
  constructor(props){
    super(props);
    this.state = {
      input : '',
      todos : [
        {id : 0, text : '리액트 소개', checked : false },
        {id : 1, text : '리액트 소개', checked : true },
        {id : 2, text : '리액트 소개', checked : false },
      ],
      color : '#343a40' 
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos]; // 배열을 복사
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    };

    this.setState({
      todos : nextTodos
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    })
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input : '',
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    });
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  render(){
    console.log(this.state.input);
    const { input } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
    <TodoListTemplate 
    form = {<Form
    color = {color} value = {input} onKeyPress = {handleKeyPress}
    onChange = {handleChange} onCreate = {handleCreate}/>}
    pallet = { <Palette colors={colors} selected = { color } onSelect={handleSelectColor}/>} 
    children = {<TodoItemList todos = {this.state.todos} 
    onToggle={handleToggle}
    onRemove={handleRemove}/>}
    />
    );
  };
}

export default App;