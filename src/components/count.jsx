import React, { Component } from 'react';

class Count extends Component {

    render(){
        return (
            <div>
                <h4>{this.props.count.item}</h4>
                <span className= {this.getBadgeClasses()} > {this.formatCount()}</span>
                
                <button onClick = { () => this.props.onIncrement(this.props.count) } 
                className = "btn btn-secondary btn-sm"
                >Increment</button>

                <button onClick = {() => this.props.onDelete(this.props.count.id)} className = 'btn btn-danger btn-sm m-2' >Delete</button>

            </div>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.count.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
    const {value} = this.props.count;
    return value === 0 ? 'Zero' : value;
    }
}



export default Count;