import React, { Component } from 'react';

class UserListItem extends Component {
    handleSelectUser = (key) => {
        this.props.select(key);
    }
    render(){
        let classes = "panel-block ";
        classes += this.props.active;
        
        return(
            <a className={ classes}  
            onClick={() => this.props.select(this.props.identifier)} 
            >
               
                {this.props.children}
            </a>
        );
    }
}

export default UserListItem;