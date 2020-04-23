import React, { Component } from 'react'
import TodoItem from './TodoItem'



export default class TodoList extends Component {
    render() {
      
        const {items, clearList,  handleDelete, handleEdit } = this.props;
        return (
           <ul className="list-group my-5">
           <h3 className="text-capitalize text-center">todoList</h3>
           {
           items.map(item =>(
          <TodoItem  key ={item.id} title ={item.title}   
           handleEdit={()=> handleEdit(item.id)}
            handleDelete={()=> handleDelete(item.id)} />
            ))
            }              
           
               <button type="submit" onClick={clearList}
                className="btn btn-danger btn-block text-capitalize mt-4">Delete List</button>
               </ul>
              
            
        )
    }
}

