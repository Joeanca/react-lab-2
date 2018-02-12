import React, { Component } from 'react';

class HomeItem extends Component {
    handleSelectItem = (key) => {
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

export default HomeItem;