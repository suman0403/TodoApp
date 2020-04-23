import React, { Component } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state ={
    items : [],
    item :'',
    id:uuidv4(),
    editItem : false
  }
  handleInputChange = (e) =>{
    this.setState({item : e.target.value})
  }
  handleFormSubmit = (e) =>{
    e.preventDefault();
    const newItems = {id : this.state.id, title: this.state.item}
    //console.log(newItems);
    const updatedItems = [...this.state.items, newItems];
    this.setState({items: updatedItems, item :'', id: uuidv4(), editItem: false})
  }
  clearList = () =>{
    this.setState({items : []})
  }
  handleDelete =(id) =>{  
    const filtererdItem = this.state.items.filter(item => item.id !== id);   
    this.setState({items: filtererdItem})
  }
  handleEdit = (id) =>{    
    const editedItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({items:editedItem, editItem : true, id : id, item: selectedItem.title})
  }
  
  render(){ 
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">TodoApp</h3>
          <TodoInput  handleInputChange ={this.handleInputChange} 
          item = {this.state.item}
           handleFormSubmit={this.handleFormSubmit}
           editItem ={this.state.editItem}
          />
          <TodoList items ={this.state.items} 
          clearList={this.clearList}
           handleDelete = {this.handleDelete}
           handleEdit ={this.handleEdit}
          
           />

          </div>
      
     
      </div>
      </div>
    
     
    </div>
  );
}
}

export default App;
