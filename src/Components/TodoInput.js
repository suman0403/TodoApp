import React, { Component } from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class TodoInput extends Component {  
    render() {
        const {item, handleInputChange, handleFormSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit ={handleFormSubmit}> 
                <div className="input-group>">
                    <div className="input-group-prepend">
                       <div  className="input-group-text bg-primary text-white">
                       <i className="fas fa-book"></i> 
                       </div>
                       <input type="text" className="form-control text-capitalize"
                        placeholder="Add todo item" onChange={handleInputChange} value={item}/>   
                    </div>
                    <button type="submit" 
                    className={
                        editItem ? "btn btn-block btn-success mt-3":
                         "btn btn-block btn-primary mt-3"}>
                             {editItem ? 'Edit Item' :'Add Item'}</button>
                  
                </div>
                
                
                </form>
            </div>
        )
    }
}
