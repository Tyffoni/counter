import React, { Component } from 'react'
import Count from './count';    

class Counters extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;

        return (   
            <div>
                <button onClick = {onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(count => (
                    <Count key = {count.id}
                     onDelete = {onDelete}
                     onIncrement = {onIncrement}
                     count = {count}>
                    </Count>
                     ))}
            </div>
        );
    }
}
 
export default Counters;