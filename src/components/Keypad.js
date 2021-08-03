// Code Keypad Component Here
import React from 'react';
// maybe look up when to use import React { Component } and when to use import React?? 

export default class Keypad extends React.Component {
    // render an input (with the right type??) oh input tag with the right type
    render() {
        return(
            <div><input type="password" onKeyUp={this.handleKeyUp}></input></div>
        )
    }

    handleKeyUp = () => {
        console.log('Entering password...')
    }
}